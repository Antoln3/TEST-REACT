import React from "react"
import { useState } from "react"

function Article() {
    const article = [
        {
            title: 'Titre 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit fugit soluta ullam eaque deserunt, dignissimos ea placeat. Voluptates veritatis esse adipisci nulla ab. Rerum delectus soluta aspernatur magnam esse!'
        },
        {
            title: 'Titre 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit fugit soluta ullam eaque deserunt, dignissimos ea placeat. Voluptates veritatis esse adipisci nulla ab. Rerum delectus soluta aspernatur magnam esse!'
        },
        {
            title: 'Titre 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit fugit soluta ullam eaque deserunt, dignissimos ea placeat. Voluptates veritatis esse adipisci nulla ab. Rerum delectus soluta aspernatur magnam esse!'
        },
        {
            title: 'Titre 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit fugit soluta ullam eaque deserunt, dignissimos ea placeat. Voluptates veritatis esse adipisci nulla ab. Rerum delectus soluta aspernatur magnam esse!'
        },
        {
            title: 'Titre 5',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit fugit soluta ullam eaque deserunt, dignissimos ea placeat. Voluptates veritatis esse adipisci nulla ab. Rerum delectus soluta aspernatur magnam esse!'
        },
        {
            title: 'Titre 6',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit fugit soluta ullam eaque deserunt, dignissimos ea placeat. Voluptates veritatis esse adipisci nulla ab. Rerum delectus soluta aspernatur magnam esse!'
        },
    ]
    // state

    const [currentArticleIndex, setCurrentArticleIndex] = useState(0)

    
    // comportements

    const nextArticle = () => {
        setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % article.length)
    }

    const prevArticle = () => {
        setCurrentArticleIndex((prevIndex) => (prevIndex - 1 + article.length) % article.length)
    }

    // affichage
    return <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h1>Test</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minus repellat? Placeat iure error repellendus iste inventore maiores amet, commodi dolorem deserunt quia, dolorum incidunt ex porro voluptate quas autem?
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h1>Test</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minus repellat? Placeat iure error repellendus iste inventore maiores amet, commodi dolorem deserunt quia, dolorum incidunt ex porro voluptate quas autem?
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h1>Test</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minus repellat? Placeat iure error repellendus iste inventore maiores amet, commodi dolorem deserunt quia, dolorum incidunt ex porro voluptate quas autem?
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <h1>{article[currentArticleIndex].title}</h1>
                        <p>
                            {article[currentArticleIndex].content}
                        </p>
                        <button onClick={prevArticle}>Article Précédent</button>
                        <button onClick={nextArticle}>Article Suivant</button>
                    </div>
                </div>
    </div>
}


export default Article