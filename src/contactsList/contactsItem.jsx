export default function ContactsList({id,name,number}) {
    return (
        <li key={id}>
            <span>{name}: </span><span>{number}</span>
            </li>
    )
}