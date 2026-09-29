   let outerdiv = document.createElement("div")
        document.body.append(outerdiv)
        let section = document.createElement("section")
        section.innerText = "Subrahmnaya!"
        outerdiv.appendChild(section)
        let asidetag = document.createElement("aside")
        let innerh1 = document.createElement("h1")
        innerh1.innerText = "Hii"
        asidetag.appendChild(innerh1)
        outerdiv.appendChild(asidetag)
        let anotheraside = document.createElement("aside")
        let h2 = document.createElement("h2")
        h2.innerText = "Hello"
        let p = document.createElement("p")
        p.innerText = "Hello Para"
        anotheraside.appendChild(h2)
        anotheraside.appendChild(p)
        section.appendChild(asidetag)
        section.appendChild(anotheraside)

        ///
        let article = document.createElement("article")
        article.innerText = "hello my name is subrahmanyaa"
        outerdiv.appendChild(article)
        let div = document.createElement("div")
        article.appendChild(div)
        let innerArticle = document.createElement("article")
        div.appendChild(innerArticle)

        let innerdiv = document.createElement("div")
        innerArticle.appendChild(innerdiv)
        let h6 = document.createElement("h6")
        h6.innerText = "Bye ....."

        innerdiv.appendChild(h6)

        console.log(outerdiv);
        