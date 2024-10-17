import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg from './assets/bg.jpg';
import { toast } from 'react-hot-toast';

function Category(props) {

    //bg image
    const bgimg = {
        backgroundImage: `url(${bg})`,
    };
    //bg color
    const ashColor = 'rgba(70, 70, 70, 0.5)';
    const bgclr = {
        backgroundColor: ashColor,
    };

    return (

        <div className="bg-fixed bg-cover bg-center bg-no-repeat" style={bgimg}>
            <div class='h-full w-full flex flex-row text-base' style={bgclr}>

                <div className="sm:w-1/12 md:w-2/12 lg:w-3/12 h-full overflow-y-auto"></div>
                <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 h-full overflow-y-auto">
                    <div className="lg:max-w-full rounded-xl overflow-hidden shadow-lg mx-3 my-6 bg-Light1 border-2 border-dark2">


                    add category




                    </div>
                </div>
                <div className="sm:w-1/12 md:w-2/12 lg:w-3/12 h-full overflow-y-auto"></div>

            </div>


            <div class='h-full w-full flex flex-row text-base' style={bgclr}>

            <div className="sm:w-1/12 md:w-2/12 lg:w-3/12 h-full overflow-y-auto"></div>
                <div className="sm:w-5/12 md:w-4/12 lg:w-3/12 h-full overflow-y-auto">
                    <div className="lg:max-w-full rounded-xl overflow-hidden shadow-lg mx-3 my-6 bg-Light1 border-2 border-dark2">


show income category




                    </div>
                </div>
                <div className="sm:w-5/12 md:w-4/12 lg:w-3/12 h-full overflow-y-auto">
                    <div className="lg:max-w-full rounded-xl overflow-hidden shadow-lg mx-3 my-6 bg-Light1 border-2 border-dark2">



show expense category



                    </div>
                </div>
                <div className="sm:w-1/12 md:w-2/12 lg:w-3/12 h-full overflow-y-auto"></div>

            </div>


        </div>
    );
}

export default Category;
