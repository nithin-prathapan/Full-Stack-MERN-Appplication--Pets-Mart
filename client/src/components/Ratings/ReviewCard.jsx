import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios'
import { useSelector } from 'react-redux';

const ReviewCard = ({ id }) => {
    const { user } = useSelector((state) => state.auth)
    const userName = user.name
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/pet/${id}`).then((response) => {
            setReviewData(response.data.review)
        })
    }, [id])
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    const [showRatingContainer, setShowRatingContainer] = useState(false)
    const handleRating = (num) => {
        setRating(num)
        setShowRatingContainer(true)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (rating === 0) {
            alert('Please add a rating')
        } else {
            await axios.put(`http://localhost:4000/pet/review/${id}`, { rating, review, userName }).then((response) => {
            })
            alert('Thanks for your valuable ratings')
            setShowRatingContainer(false)
            setReview('')
            setRating(0)
        }
    }
    return (
        <div className="mt-10 pb-[10%]  w-full my-auto  font-primary p-2">

            <div className="reviews flex justify-center my-auto">
                <h1 className="text-lg font-semibold">
                    Reviews <span>(2 Reviews)</span>
                </h1>
            </div>
            <div className="rating-demo mt-2 mb-2 justify-center flex w-full">
                <h1 onClick={(e) => handleRating(1)} className="rounded-[100px] bg-[#000] px-1 py-1 cursor-pointer hover:scale-105
                 duration-300 font-semibold hover:translate-y-1 text-[#fff] flex ml-2">
                    1
                    <span className="my-auto ml-1 mr-1">
                        <AiFillStar color="orange" />
                    </span>
                </h1>
                <h1 onClick={(e) => handleRating(2)} className="rounded-[100px] bg-[#000] px-1 py-1 cursor-pointer hover:scale-105
                 duration-300 font-semibold hover:translate-y-1 text-[#fff] flex ml-2">
                    2
                    <span className="my-auto ml-1 mr-1">
                        <AiFillStar color="orange" />
                    </span>
                </h1>
                <h1 onClick={(e) => handleRating(3)} className="rounded-[100px] bg-[#000] px-1 py-1 cursor-pointer hover:scale-105
                 duration-300 font-semibold hover:translate-y-1 text-[#fff] flex ml-2">
                    3
                    <span className="my-auto ml-1 mr-1">
                        <AiFillStar color="orange" />
                    </span>
                </h1>
                <h1 onClick={(e) => handleRating(4)} className="rounded-[100px] bg-[#000] px-1 py-1 cursor-pointer hover:scale-105
                 duration-300 font-semibold hover:translate-y-1 text-[#fff] flex ml-2">
                    4
                    <span className="my-auto ml-1 mr-1">
                        <AiFillStar color="orange" />
                    </span>
                </h1>
                <h1 onClick={(e) => handleRating(5)} className="rounded-[100px] bg-[#000] px-1 py-1 cursor-pointer hover:scale-105
                 duration-300 font-semibold hover:translate-y-1 text-[#fff] flex ml-2">
                    5
                    <span className="my-auto ml-1 mr-1">
                        <AiFillStar color="orange" />
                    </span>
                </h1>
            </div>
            {
                showRatingContainer ? (<div className='mx-auto w-[50%] bg-[#000] p-2 text-[#fff] rounded-md'>
                    <div className='mx-auto'>
                        <h1 className='text-center rounded-md border-2 flex p-2  border-yellow w-[100%] font-bold  my-auto'>
                            <span className='mx-auto'>Rating : </span>
                            {rating} <span className='my-auto  mx-1'><AiFillStar color='orange' /></span> </h1>
                    </div>
                </div>) : (<></>)
            }
            <div className="share bg-[#fff] p-4 mt-4 border rounded-xl flex w-full mx-auto  justify-between">
                <form
                    className="flex w-full justify-between"
                    // onSubmit={handleSubmit}
                    action=""
                >
                    <input
                        // ref={reviewMsgRef}
                        className="outline-none w-full "
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Share your thoughts"
                        name=""
                        id=""
                        required
                    />
                    <button onClick={handleSubmit}
                        type="submit"
                        className="bg-button-primary pl-2 pr-2 p-1 border-[1px] rounded-3xl"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className='w-full'>
                {
                    reviewData.length !== 0 ? (<div className='w-full p-4 my-4 shadow-md'>
                        {
                            reviewData.slice(-3).map((rev) => (
                                <div key={rev._id} className='flex justify-between w-full'>
                                    <h1 className='flex font-semibold my-auto'>
                                        <span className='my-auto mr-2'>
                                            <AiFillStar color='orange' size={25} />
                                        </span>{rev.rating}</h1>
                                    <h1 className='my-auto'>{rev.review}</h1>
                                    <h1><FaUserCircle /></h1>
                                </div>
                            ))
                        }
                    </div>) : (<></>)
                }
            </div>

        </div >
    )
}


export default ReviewCard