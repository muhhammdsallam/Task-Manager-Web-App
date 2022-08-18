const asyncWrapper = (fn)=>{ //fn is the function that we want to wrap
    return async (req, res, next)=>{ //req, res, next are the parameters that we want to pass to the function that we want to wrap
        try{
            await fn(req, res, next);
        }catch(error){
            next(error); //pass the error to the next middleware
        }
    }
};
module.exports = asyncWrapper;