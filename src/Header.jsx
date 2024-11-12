import React from "react"
import './css/Header.css'

function Header() {
    // state
    
    // comportements

    // affichage
    return <div>
            <nav  class="navbar navbar-expand-lg bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src="./src/assets/logo_orange_miniatures.png" alt="Bootstrap" width="80" height="80"/>    
                    </a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Logo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Logo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Logo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Logo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Logo</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
}


export default Header