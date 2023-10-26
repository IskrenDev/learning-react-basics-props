import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function ListItemDropdown(props: { content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return <li className="dropdown">{props.content}</li>
}

export default ListItemDropdown;