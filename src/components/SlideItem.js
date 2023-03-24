import PropTypes from 'prop-types'
import { memo, useEffect, useState } from 'react'

function SlideItem({ data, isCurrent, onClick }) {
    const [isShowInfo, setIsShowInfo] = useState(false)

    useEffect(() => {
        if(isCurrent) {
            var timeOut = setTimeout(() => {
                setIsShowInfo(true)
            }, 500)
        } 
        else {
            setIsShowInfo(false)
        }

        return () => clearTimeout(timeOut)
    }, [isCurrent])

    return (
        <li onClick={onClick} className='relative'>
            <div className={
                isCurrent
                    ?
                    'overflow-hidden px-3 w-selected-slide-item cursor-pointer transition-all duration-500'
                    :
                    'overflow-hidden px-3 w-slide-item cursor-pointer transition-all duration-500'
            }>
                <img src={data.imageUrl} alt='product' className='w-full select-none rounded-md hover:opacity-75' />
            </div>
            {
                isShowInfo
                &&
                <div className='absolute top-full left-3 right-3 mt-3 p-3 text-center border rounded-md'>
                    <h1 className='font-semibold'>{data.name}</h1>
                    <p className='text-sm my-3'>{data.description}</p>
                    <h2 className='font-semibold text-xl'>${data.price}</h2>
                </div>
            }
        </li>
    )
}

SlideItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default memo(SlideItem)