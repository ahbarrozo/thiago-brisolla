/**
 *  Component for blog posts. It contains a title, 
 *  subtitle, text and images. Images is an array 
 *  of filepaths.
 */

'use client';

import { useState } from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";

import styles from './BlogPost.module.css';

export interface BlogPostProps {
  id: number;
  title: string;
  subtitle?: string;
  text: string;
  images?: string[];  // Array of image URLs
  headerTemplate?: React.ReactNode;
  footerTemplate?: React.ReactNode;
}

export default function BlogPost({ title, subtitle, text, images }: BlogPostProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const imageTemplate = (image: string) => {
        return (
            <Image alt="Imagem" src={image} preview />
        );
    }
    
    const headerCard = !images ? (<></>) : (
        <Image alt="Imagem" src={images[0]} />
    );

    const headerDialog =
        !images || images.length === 1 ? headerCard : 
        (
            <Carousel value={images} 
                      numVisible={2} 
                      numScroll={1} 
                      className="custom-carousel" 
                      circular
                      itemTemplate={imageTemplate}  ></Carousel>
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
            <Dialog header={headerDialog}
                    style={{ width: '50rem' }}
                    visible={visible}
                    onHide={() => { if (!visible) return; setVisible(false); }}>
                <p className={styles['blogpost-text']}>
                    {text}
                </p>
            </Dialog>
        </div>
    );
}
