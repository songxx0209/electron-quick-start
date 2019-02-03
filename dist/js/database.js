var DB_NAME = 'indexedDB-test',
  VERSION = 1,
  db;
var request = indexedDB.open(DB_NAME, VERSION);
request.onsuccess = function (event) {

  console.log('数据库操作成功!  00000');
  db = event.target.result;
  // console.log(event.target === request); // true
  db.onsuccess = function (event) {
    console.log('数据库操作成功!');
  };
  db.onerror = function (event) {
    console.error('数据库操作发生错误！', event.target.errorCode);
  };
  console.log('打开数据库成功!');
};
request.onerror = function (event) {
  console.error('创建数据库出错');
  console.error('error code:', event.target.errorCode);
};
request.onupgradeneeded = function (event) {
  // 更新对象存储空间和索引 .... 
  console.error('创建数据库 触发事务');
};