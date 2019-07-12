// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

/**
|--------------------------------------------------
| Basically what this hook will do is add a surname if it has not been reported.
|--------------------------------------------------
*/

module.exports = function (options = {}) {
  return async context => {
    //taking only context data
    const { data } = context;

    //checking if the client has the surname
    if(!data.name.last){
      data.name.last = 'Stark';
    }

    //Important, a Hook always returns the context
    return context;
  };
};
