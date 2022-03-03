interface cardProps {
    text: string
    tags: Array<String>
}

export default function Card(props: cardProps) {
    return (
        <div className="insights">
            <p>{props.text}</p>
            <ul>
                <li>{props.tags[0]}</li>
                <li>{props.tags[1]}</li>
            </ul>
        </div>
    )
}