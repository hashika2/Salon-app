import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const getStoreData = (location) => {
	// axios.get('http://192.168.43.173:3000/api/store/all').then(res => console.log("*************",res)).catch(err=> console.log("#######",err));
	let res = [
		{
			name: 'Hashika Maduranga',
			work: 'Hair cutting, coloring hair styling',
			price: '10',
			avatar:
				'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		},
		{
			name: 'Hashika Maduranga',
			work: 'Hair cutting, coloring hair styling',
			price: '10',
			avatar:
				'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		},
		{
			name: 'Hashika Maduranga',
			work: 'Hair cutting, coloring hair styling',
			price: '10',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Hashika Maduranga',
			work: 'Hair cutting, coloring hair styling',
			price: '10',
			avatar:
				'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		},
		{
			name: 'Hashika Maduranga',
			work: 'Hair cutting, coloring hair styling',
			price: '10',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Hashika Maduranga',
			work: 'Hair cutting, coloring hair styling',
			price: '10',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		}
	];

	if (location == 'Galle') {
		res = [
			{
				name: 'Hashika Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			},
			{
				name: 'Hashika Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			}
		];
	}

    if (location == 'Colombo') {
		res = [
			{
				name: 'Kamal Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			},
			{
				name: 'Alex Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			}
		];
	}
	// AsyncStorage.setItem('store-data', res)
	return res;
};

export const getBookedData = () => {
	// axios.get('http://192.168.43.93:3000/api/store/all').then(res => console.log("*************",res)).catch(err=> console.log("#######",err));
	const res = [
		{
			name: 'Hashika Maduranga',
			date: '2021-10-01',
			address: 'Bentota Kanda, Galle',
			price: '10',
			validity: 'New',
			color: 'green',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Hashika Maduranga',
			date: '2021-10-01',
			address: 'Bentota Kanda, Galle',
			price: '10',
			validity: 'New',
			color: 'green',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Hashika Maduranga',
			date: '2021-10-01',
			address: 'Bentota Kanda, Galle',
			price: '10',
			validity: 'Expired',
			color: 'red',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		},
		{
			name: 'Hashika Maduranga',
			date: '2021-10-01',
			address: 'Bentota Kanda, Galle',
			price: '10',
			validity: 'Expired',
			color: 'red',
			avatar:
				'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
		}
	];
	// AsyncStorage.setItem('store-data', res)
	return res;
};
