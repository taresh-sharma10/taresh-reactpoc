import React from 'react';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Cads/Cards";



export class Home extends React.Component {
    render() {

        return (
            <div className="HomeDivision">
               
                <div>
                    <section id="sp-main-bodypart">
                        <div className="Mainhomecontent">
                            <div class="text-black container-fluid text-center" >
                                <h1 id="textanimate">311 Free Bootstrap Templates &amp; Website Themes</h1>
                                <h4>Download Free WordPress Themes and bootstrap templates.<br />
                                    All templates and themes are responsive in design and premium in quality but 100% free to download.</h4>
                                <br />
                                <div>
                                    <Link to='https://google.com/'>
                                        <button id="btn-1530282023956" class="sppb-btn  sppb-btn-primary sppb-btn-lg sppb-btn-rounded">
                                            Free Download Popular Templates
                            </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
                <div class="d-flex justify-content-end">
                    <div class="mr-auto">
                        <h3 class="addon-items-title">Featured Items</h3>
                    </div>
                    <div>
                        <a class="btn btn-outline-primary" href="/items/featured">See All</a>
                    </div>
                </div>


                <Card />


            </div>
        );
    }

}