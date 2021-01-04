using my.bookshop as demo from '../db/data-model';

service CatalogService {
    entity Orders as projection on demo.Order;
}