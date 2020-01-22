import React, {useCallback} from 'react';
import DropzoneIcon from './DropzoneIcon'
import {useDropzone} from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {imageSize} from './utils'

const useStyles = makeStyles({
    card: {
        width: imageSize,
        height: imageSize,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    canvas: {
        width: imageSize,
        height: imageSize,
        zIndex: 0,
        position: 'absolute',
    },
    input: {
        zIndex: 9999,
        position: 'absolute',
    },
});

export default function DropImageCard({setFile, canvasRef, fileLoaded}) {
    const classes = useStyles();
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 1) {
            return console.log('can only handle one file at a time');
        }
        if (acceptedFiles.length === 0) return;
        const file = acceptedFiles[0]
        if (!file.type.startsWith('image')) {
            return console.log('file must be an image')
        }
        setFile(file)
    }, [setFile])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return <Card {...getRootProps()} className={classes.card}>
        <canvas className={classes.canvas} ref={canvasRef} width={imageSize} height={imageSize} />
        <input alt="Image Dropzone" type="image" className={classes.input} {...getInputProps()} />
        <DropzoneIcon fileLoaded={fileLoaded} isDragActive={isDragActive} />
    </Card>
}