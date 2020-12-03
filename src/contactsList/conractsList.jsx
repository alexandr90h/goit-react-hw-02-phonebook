import ContactsItem from './contactsItem';

export default function ContactsList({stateData}) {
    return (
        <ul>
            {stateData.map(obj => {
                return (<ContactsItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                />)
            })}
        </ul>
    )
}