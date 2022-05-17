import React from 'react'
import { Link } from 'react-router-dom';
import { useMatch, useResolvedPath } from 'react-router-dom'
import './MenuItem.scss'
export default function MenuItem(props) {
    let resolved = useResolvedPath(props.path)
    let match = useMatch({ path: resolved.pathname, end: true });
    let path = ''
    if (match) {
        path = match.pathname
    }
    return (
        <div key={props.index} className={path === props.path ? 'text-black menu__item active' : 'text-black menu__item'} >
            <Link to={props.path} >
                <span>
                    <props.icon style={{ fontSize: '24px', padding: '10px 15px 10px 0' }} />
                </span>
                <span className='menu__item-text'> {props.name}</span>
            </Link>
        </div>
    )
}
