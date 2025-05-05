import React from 'react'
import SwiperCards from './SwiperCards'
import Link from 'next/link'
import Image from 'next/image'
import { number } from 'framer-motion'
import Heading from './Heading'
import AddToWhishList from './AddToWhishList'


const GamesSlider = ({ games, title, slidesPerView, big } : { games: Game[], title: string, slidesPerView?: number, big?: boolean }) => {
  return (
    <div className="flex flex-col gap-5 mt-8">
    <Heading text={title}/>
    <SwiperCards
      className="h-full"
      slidesPerView = { slidesPerView || 4}
      items={games.map((game: any, i: number) => ({
        card: big ? (
          <div className=" flex  overflow-hidden items-center bg-[#333839] rounded-2xl">
            <div className=" flex w-[60%] px-6  flex-col items-start ">
              <h1 className=" text-xl border-b-2 border-neutral-100 w-full pb-3 font-semibold text-white">
                {game.name}
              </h1>
              <p className=" text-sm line-clamp-4 text-gray-100 pt-3">{game.description_raw}</p>
            </div>
            <div className=" w-[40%]   h-64 relative">
              <Image
                className=" group-hover:scale-125 group-hover:rotate-6 duration-200 object-cover"
                fill
                src={game.background_image}
                alt={game.name}
              />
            </div>
          </div>
        ) : (
          <div className=" relative cursor-pointer group">
            <div
              className="  after:absolute after:inset-0 
                  after:w-0 group-hover:after:w-full after:h-full after:bg-rose-500/60 after:rounded-2xl after:duration-200  w-full h-96 rounded-2xl overflow-hidden relative "
            >
              <Image
                className=" group-hover:scale-125 group-hover:rotate-6 duration-200 object-cover"
                fill
                src={game.background_image}
                alt={game.name}
              />
            </div>
            <Link href={`/game/${game.id}`} className=" text-base line-clamp-1 mt-2 text-white font-semibold ">
              {game.name}
            </Link>
            <div className=" absolute top-2 left-4">
              <AddToWhishList plus gameId={game.id.toString()} />
            </div>
          </div>
        ),
      }))}
    />
    </div>
  )
}

export default GamesSlider;