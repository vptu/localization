namespace my.bookshop;

entity Order {
  key ID : UUID;
  item   : String;
  count  : Integer;
}