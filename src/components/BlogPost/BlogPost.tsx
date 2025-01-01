/**
 *  Component for blog posts. It contains a title, 
 *  subtitle, text and images. Images is an array 
 *  of filepaths.
 */

'use client';

import React, { useState } from "react";
import parse from "html-react-parser";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Galleria } from "primereact/galleria";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";

import styles from './BlogPost.module.css';


export interface BlogPostImage {
    description?: string;
    path: string;
    title?: string;
}

export interface BlogPostProps {
  id: number;
  title: string;
  subtitle?: string;
  text: string;
  images?: BlogPostImage[];
  headerTemplate?: React.ReactNode;
  footerTemplate?: React.ReactNode;
}
export default function BlogPost({ title, subtitle, text, images }: BlogPostProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const caption = (image: BlogPostImage) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{image.title}</div>
                <p className="text-white">{image.description}</p>
            </React.Fragment>
        );
    }

    const dialogHeaderTemplate = () => (
        <div className="gap-4">
            <h2 className="text-xl font-semibold m-0">{title}</h2>
            <span className="text-sm text-gray-600">{subtitle}</span>
        </div>
    );

    // Option 2: Side-by-side with divider
    const HeaderTemplate2 = () => (
        <div className="flex align-items-center gap-3">
            <h2 className="text-xl font-semibold m-0">{title}</h2>
            <div className="bg-gray-300" style={{ width: '1px', height: '24px' }}></div>
            <span className="text-sm text-gray-600">{subtitle}</span>
        </div>
    );

    const imageTemplate = (image: BlogPostImage) => {
        return <img src={image.path} alt={image.description} style={{ maxHeight: '640px', display: 'block' }} />;
    }

    const thumbnailTemplate = (image: BlogPostImage) => {
        return <img src={image.path} alt={image.description} style={{ display: 'block' }} />;
    }

    const headerCard = !images ? (<></>) : (
        <Image alt="Imagem" src={images[0].path} />
    );

    const imagesDialog =
        !images || images.length === 1 ? headerCard : 
        (
            <Galleria value={images} 
                      numVisible={5} 
                      responsiveOptions={responsiveOptions} 
                      item={imageTemplate} 
                      thumbnail={thumbnailTemplate} 
                      caption={caption} 
                      style={{ marginBottom: '20px', marginRight: '20px', maxWidth: '640px', float: "left" }}/>
    )
    const footerCard = (
            <Button label="Ler mais" 
                    icon="pi pi-search"
                    onClick={(e) => { 
                                setVisible(true); 
                                (e.currentTarget as HTMLElement).blur();
                                }} />
    );
    return (
        <div className={styles['blogpost']}>
            <Card title={title} subTitle={subtitle} footer={footerCard} header={headerCard} className="md:w-25rem">
                <p className="m-0">
                    {text.slice(0, 100) + '...'}
                </p>
            </Card>
            <Dialog style={{ width: '66vw', overflowY: 'auto' }}
                    header={dialogHeaderTemplate}
                    visible={visible}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    onHide={() => { if (!visible) return; setVisible(false); }}>
                {imagesDialog}
                <p className={styles['blogpost-text']}>
                    {parse(text)}
                </p>
            </Dialog>
        </div>
    );
}
