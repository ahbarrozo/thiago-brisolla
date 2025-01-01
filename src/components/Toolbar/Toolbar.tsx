'use client';

import { useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { usePathname, useRouter } from 'next/navigation';
import type { MenuItem } from 'primereact/menuitem';

import styles from './Toolbar.module.css';

export default function AppToolbar() {
    const router = useRouter();
    const menuRef = useRef<Menu>(null);
    const pathname = usePathname();

    const menuItems: MenuItem[] = [
        {
            label: 'Perfil',
            icon: 'pi pi-user',
            command: () => router.push('/perfil')
        },
        {
            label: 'Configurções',
            icon: 'pi pi-cog',
            command: () => router.push('/config')
        },
        { separator: true },
        {
            label: 'Logout',
            icon: 'pi pi-power-off',
            command: () => {/* Add logout logic */}
        }
    ];

    const startContent = (
        <div className={styles['nav-section']}>
            <span className={styles['logo-section']}>
                Thiago Brisolla
            </span>
        </div>
    );

    const centerContent = (
        <div className={styles['nav-section']}>
            <Button 
                text
                label="HOME"
                onClick={() => router.push('/')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />
            <Button 
                text
                label="DIÁRIO"
                onClick={() => router.push('/#diario')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />

            <Button 
                text
                label="SOBRE MIM"
                onClick={() => router.push('/#bio')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />

            <Button 
                text
                label="OBRA"
                onClick={() => router.push('/#obra')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />            
            <Button 
                text
                label="AGENDA"
                onClick={() => router.push('/#agenda')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />
            <Button 
                text
                label="CONTATO"
                onClick={() => router.push('/#contato')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />
        </div>
    );
    const endContent = (
        <div className={styles['admin-section']}>
            <Button 
                text
                icon='pi pi-instagram'
            onClick={() => window.open('https://www.instagram.com/thiagobrisolla_')}
                className={`button-hover ${pathname === '/' ? 'nav-button-active' : ''}`}
            />
            <Menu model={menuItems} popup ref={menuRef} />
            <Avatar 
                icon="pi pi-user" 
                size="normal" 
                shape="circle"
                className="cursor-pointer"
                onClick={(e) => menuRef.current?.toggle(e)}
            />
        </div>
    );

    return (
        <Toolbar 
            start={startContent}
            center={centerContent}
            end={endContent}
            className="border-noround border-none surface-0"
            pt={{
                root: { className: 'surface-0' }
            }}
        />
    );
}
