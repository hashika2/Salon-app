import { AsyncStorage } from 'react-native';

export default getStoreData = () => {
    const res = [
            {
                name: 'Hashika Maduranga',
                work:"Hair cutting, coloring hair styling",
                price: "10",
                avatar: 'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
            },
            {
                name: 'Hashika Maduranga',
                work:"Hair cutting, coloring hair styling",
                price: "10",
                avatar: 'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
            },
            {
                name: 'Hashika Maduranga',
                work:"Hair cutting, coloring hair styling",
                price: "10",
                avatar: 'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
            },
            {
                name: 'Hashika Maduranga',
                work:"Hair cutting, coloring hair styling",
                price: "10",
                avatar: 'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
            },
            {
                name: 'Hashika Maduranga',
                work:"Hair cutting, coloring hair styling",
                price: "10",
                avatar: 'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
            },
            {
                name: 'Hashika Maduranga',
                work:"Hair cutting, coloring hair styling",
                price: "10",
                avatar: 'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
            }
    ]
    // AsyncStorage.setItem('store-data', res)
    return res;
}