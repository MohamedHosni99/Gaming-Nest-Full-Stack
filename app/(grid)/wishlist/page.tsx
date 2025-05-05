"use client";
import GridContainer from '@/app/components/defaults/GridContainer'
import Empty from '@/app/components/defaults/Empty';
import GameCard from '@/app/components/GameCard';
import GameSkeleton from '@/app/components/GameSkeleton';
import Heading from '@/app/components/Heading';
import { useWishlsit } from '@/app/context/wishlistContext'
import { useGetGamesWithIds } from '@/lib/queryFunctions';
import React from 'react'

const page = () => {
  const {wishlist} = useWishlsit();
  const{ games, isLoading} = useGetGamesWithIds(wishlist)
  return (
    <div className="flex flex-col gap-4 mt-10">
      <Heading text="My Wishlist"/>
      <GridContainer className='gap-5' cols={4}>
      { isLoading ? (
          <GameSkeleton/>
        ) : (games ?? []).length > 0 ? (
          games?.map((game: any) => (
            <GameCard 
              wishlist={true} 
              key={game.data.id} 
              game={{ 
                ...game.data ,
                short_screenshots: game.screenshots
              }} />
          ))
        ) : (
          <Empty
            message="You have not added anything to your wishlist yet !"
            link="/games"
            linkText="Browse More Games"
          />
      )}

    </GridContainer>
    </div>
  )
}

export default page