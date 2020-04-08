import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { NavLink } from 'react-router-dom';
export function Header() {
    return (
        <div>
            <div>
                <div className="body-innerwrapper">
                    <section id="sp-hello-bar"><div className="container">
                        <div className="row">
                            <div id="sp-hellobar" class="col-sm-12 col-md-12" align="center" >
                                <div class="sp-column ">
                                    <div class="sp-module ">
                                        <div class="sp-module-content">

                                            <div className="custom"  >
                                                <div>Gutenberg Compatible WordPress Theme!
          <a href="/item/1527585-gutenwp-free-gutenberg-compatible-wordpress-blog-theme">Download Free</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>


                <div>
                    <div className="row">
                        <div id="sp-head" class="col-sm-12 col-md-12">
                            <div className="sp-column ">
                                <div className="row">
                                    <div class="col-4 col-md-4">
                                        <a class="toggle-offcanvas d-block d-lg-none" href="#">
                                            <span class="ico ico-justify-all">
                                            </span>
                                        </a>
                                        <a className="logo" href="/">
                                            <div>
                                                <div class="d-none d-md-block">
                                                    <img src="/assets/logo.svg" width="200px" height="90px" alt="ThemeHunt">
                                                    </img>

                                                </div>
                                                
                                                
                                            </div>
                                        </a>
                                    </div>
                                    <div class="d-none d-md-block col-md-4">
                                        <div className="ajax-item-search">
                                            <form className="item-search-form" action="/items/latest" method="get">
                                                <div className="form-inner">
                                                    <input type="text" name="search" class="form-control input-product-search" placeholder="Enter Keyword"  autocomplete="off">
                                                    </input>
                                                    <button type="submit" class="btn btn-search">Search
                                                    <span className="ico ico-search">
                                                    </span>
                                                    </button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div class="col-8 col-md-4">
                                        <ul className="menu-account" >
                                            <li className="li-link">
                                                <a href="/login?return=aHR0cHM6Ly90aGVtZWh1bnQuY29tLw==">Login
                                                </a>
                                            </li>
                                            <li className="ml-30 li-btn d-none d-md-inline-block" >
                                                <a href="/login?return=aW5kZXgucGhwP29wdGlvbj1jb21fcHJvZHVjdCZ2aWV3PWZvcm0mbGF5b3V0PWVkaXQmSXRlbWlkPTEwNw==">Upload Your Item
                                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <NavLink to='/' exact className="button" activeClassName='success'>Home</NavLink>
                <NavLink to='/about' className="button" activeClassName='success'>About</NavLink>
                <NavLink to='/contact' className="button" activeClassName='success'>Contact</NavLink>
                <NavLink to='/html' className="button" activeClassName='success'>HTML</NavLink>

            </div>
            <hr />
        </div >


    )
}
