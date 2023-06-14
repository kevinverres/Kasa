import '../../assets/css/Tag.css';

function Tag({data}) {
    return (
        data[0].tags.map((tag, index) => {
            return (
                <button key={index} className='tags'>{tag}</button>
            )
        })
    )
}

export default Tag;