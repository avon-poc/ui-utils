const isParamsNotEmpty = (params) => {
    
    if( ((typeof params === "object" || typeof params === "string" )&& params != null && params.length>0 ) )
    {
        return true;
    }
    else  {
        return false;
    }
    }

export default isParamsNotEmpty;