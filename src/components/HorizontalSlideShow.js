import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import SlideItem from './SlideItem'

function HorizontalSlideShow({ data }) {
    const [choosenId] = useState(Math.ceil(data.length / 2) || 0)
    const [currentId, setCurrentId] = useState(choosenId)

    const handleSelect = useCallback((id) => {
        setCurrentId(id)
    }, [])

    return (
        <div className='relative w-full h-[300px] flex items-center'>
            <div className={!!(data.length % 2) ? 'w-full' : 'w-full translate-x-[100px]'}>
                <ul className='flex justify-center items-center w-full transition-transform duration-500' style={{ transform: `translatex(${(choosenId - currentId) * 200}px)` }}>
                    {
                        data.map(item => (
                            <SlideItem key={item.id} data={item} isCurrent={currentId === item.id} onClick={() => handleSelect(item.id)} />
                        ))
                    }
                </ul>
            </div>
            <div className='h-full w-10 absolute top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none'></div>
            <div className='h-full w-10 absolute top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
        </div>
    )
}

HorizontalSlideShow.propTypes = {
    data: PropTypes.array.isRequired
}

export default HorizontalSlideShow