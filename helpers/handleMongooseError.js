//Добавляем мидделвар, чтобы при ошибке, несоблюдения формата схемы, статус был 400
const handleMongooseError = (error, data, next) => {
  error.status = 400;
  next();
};

module.exports = handleMongooseError;
