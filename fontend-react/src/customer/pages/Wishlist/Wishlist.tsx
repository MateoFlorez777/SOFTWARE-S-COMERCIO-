import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store'
import { getWishlistByUserId } from '../../../Redux Toolkit/Customer/WishlistSlice';
import WishlistProductCard from './WishlistProductCard';

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const { wishlist } = useAppSelector(store => store)


    console.log("wishlist", wishlist)
    return (
        <div className='h-[85vh] p-5 lg:p-20'>
            {wishlist.wishlist?.products.length ?
                <section>
                    <h1><strong>Mi lista de deseos</strong> {wishlist.wishlist.products.length} productos</h1>
                    <div className='pt-10 flex flex-wrap gap-5'>

                        {wishlist.wishlist?.products?.map((item) => <WishlistProductCard item={item} />)}

                    </div>
                </section> :
                <div className="h-full flex justify-center items-center flex-col">
                    <div className="text-center py-5">
                        <h1 className="text-lg font-medium">¡Vaya, se siente tan ligero!</h1>
                        <p className="text-gray-500 text-sm">
                            No hay nada en tu lista de deseos, agreguemos algunos artículos.
                        </p>
                    </div>

                </div>}
        </div>
    )
}

export default Wishlist