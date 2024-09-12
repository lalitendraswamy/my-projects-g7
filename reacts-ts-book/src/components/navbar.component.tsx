import React from 'react';
import 'bootstrap/dist/js/bootstrap'



interface NavbarProps {
    title: string,
    slogan?: string,
    activeTab:string
    changeTab: (tab:string)=>void
}


export const NavBar = ({ title,activeTab,changeTab }: NavbarProps) => {




    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={()=>changeTab('authors')} className={`nav-link ${activeTab==='authors'&&'active'}`} aria-current="page" href="#">Authors</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>changeTab('add-author')} className={`nav-link ${activeTab==='add-author'&&'active'}`} href="#">Add Author</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>changeTab('books')} className={`nav-link ${activeTab==='books'&&'active'}`} aria-current="page" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>changeTab('add-book')} className={`nav-link ${activeTab==='add-book'&&'active'}`} href="#">Add Book</a>
                        </li>


                    </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Members
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><a className="dropdown-item" href="#">Register</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );

}

