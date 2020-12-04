import ContactsItem from '../contactsList/contactsItem';
export default function FilterContactsList({stateData, changeFilter }) {
    return (
        <ul>
            {stateData.filter(obj => {
                if (obj.name===changeFilter){}
                return (<ContactsItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                />)
            })}
        </ul>
    )
}