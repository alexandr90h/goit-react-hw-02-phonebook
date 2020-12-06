import ContactsItem from './contactsItem';
import styles from './conractsList.module.scss'
export default function ContactsList({stateData, onBtnDelId}) {
    return (
        <ol className={styles.contactList}>
            {stateData.map(obj => {
                return (<ContactsItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={onBtnDelId}
                />)
            })}
        </ol>
    )
}