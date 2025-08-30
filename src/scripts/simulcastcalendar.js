removeDuplicate = () =>{
    const urls = []
    document.querySelectorAll('.day li').forEach(item => {
        let url = item.querySelector('a').href
        console.log(url)
        if (urls.includes(url)) {
            item.remove()
        } else {
            urls.push(url)
        }
    })
}

removeDuplicate()