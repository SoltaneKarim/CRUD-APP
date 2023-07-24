let blogs = {results : []}

module.exports.getHandler = (req,res)=>{
      res.status(200).json(blogs)
}

module.exports.postHandler = (req,res)=>{
      console.log(req.body)
      blogs.results.push(req.body)
      res.status(201).json(blogs)
}

module.exports.errorHandler = (req,res)=>{
      res.status(404).send()
}

module.exports.deleteHandler = (req,res)=>{
      console.log('delete handler',req.body)
      const indexToDelete = blogs.results.findIndex((blog) => blog.title === req.body.title);
      blogs.results.splice(indexToDelete,1)
      console.log("blogs",blogs)
      res.status(201).json(blogs)
}

module.exports.mainHandler = (req,res)=>{
      return res.send('hello world')
}