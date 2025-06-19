import { Navigation, TentTree, TreePalm } from "lucide-react";


export const puneListings = [
  { title: 'Sea View in Pune', price: '₹4405 for 2 nights · ★ 4.91', img: 'https://images.unsplash.com/photo-1746549854237-1836d4c6d76c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyYm5iJTIwcHVuZXxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Villa in Pune', price: '₹3354 for 2 nights · ★ 4.56', img: 'https://images.unsplash.com/photo-1669664863985-ac4a81e7483e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Sea View in Pune', price: '₹3534 for 2 nights · ★ 4.67', img: 'https://media.istockphoto.com/id/638442030/photo/big-modern-bedroom.webp?a=1&s=612x612&w=0&k=20&c=OQ2kQTsx-LWGs1atQXy0fks25YUDciagMdgcXpz6Its=' },
  { title: 'Villa in Pune', price: '₹3257 for 2 nights · ★ 4.83', img: 'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Guest House in Pune', price: '₹4373 for 2 nights · ★ 4.74', img: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Budget Stay in Pune', price: '₹4735 for 2 nights · ★ 4.6', img: 'https://images.unsplash.com/photo-1589419896452-b460b8b390a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Villa in Pune', price: '₹4777 for 2 nights · ★ 4.55', img: 'https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Cozy Home in Pune', price: '₹4343 for 2 nights · ★ 5.0', img: 'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Budget Stay in Pune', price: '₹3607 for 2 nights · ★ 4.3', img: 'https://images.unsplash.com/photo-1711111038475-0dc445eeb97e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Budget Stay in Pune', price: '₹3409 for 2 nights · ★ 4.59', img: 'https://images.unsplash.com/photo-1684182309189-a1384f3d7d4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWlyYm5ifGVufDB8fDB8fHww' },
];

export const mumbaiListings = [
  { title: 'Budget Stay in Mumbai', price: '₹5476 for 2 nights · ★ 4.62', img: 'https://plus.unsplash.com/premium_photo-1673014201217-14442b17ab56?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXMlMjBhbmQlMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Loft in Mumbai', price: '₹6950 for 2 nights · ★ 4.97', img: 'https://images.unsplash.com/photo-1737712374390-e63ec8b56da9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXMlMjBhbmQlMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Studio in Mumbai', price: '₹5136 for 2 nights · ★ 4.46', img: 'https://plus.unsplash.com/premium_photo-1675537856917-d662fd1ddc3a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXMlMjBhbmQlMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Budget Stay in Mumbai', price: '₹6206 for 2 nights · ★ 4.57', img: 'https://images.unsplash.com/photo-1737712374609-0e9e0594dda4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vbXMlMjBhbmQlMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Villa in Mumbai', price: '₹5158 for 2 nights · ★ 4.6', img: 'https://images.unsplash.com/photo-1737712374525-420eb28c1bea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXMlMjBhbmQlMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Loft in Mumbai', price: '₹6424 for 2 nights · ★ 4.33', img: 'https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvb21zJTIwYW5kJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D' },
  { title: 'Flat in Mumbai', price: '₹5861 for 2 nights · ★ 4.56', img: 'https://images.unsplash.com/photo-1737712374667-2d7c04d32548?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb21zJTIwYW5kJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D' },
  { title: 'Villa in Mumbai', price: '₹6489 for 2 nights · ★ 4.31', img: 'https://images.unsplash.com/photo-1737712374999-51f158582b69?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb21zJTIwYW5kJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D' },
  { title: 'Guest House in Mumbai', price: '₹5967 for 2 nights · ★ 4.46', img: 'https://images.unsplash.com/photo-1737712374435-54ee4034f4c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb21zJTIwYW5kJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D' },
  { title: 'Studio in Mumbai', price: '₹5392 for 2 nights · ★ 4.46', img: 'https://plus.unsplash.com/premium_photo-1683649964220-0fa832aa7068?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXMlMjBhbmQlMjB2aWxsYXMlMjBhaXJibmJ8ZW58MHx8MHx8fDA%3D' },
];

export const delhiListings = [
  { title: 'Guest House in Delhi', price: '₹4898 for 2 nights · ★ 4.74', img: 'https://images.unsplash.com/photo-1631940182015-6604116ead7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXMlMjBhbmQlMjB2aWxsYXMlMjBhaXJibmJ8ZW58MHx8MHx8fDA%3D' },
  { title: 'Sea View in Delhi', price: '₹5745 for 2 nights · ★ 4.59', img: 'https://images.unsplash.com/photo-1721396185206-3e8b304c4eba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXMlMjBhbmQlMjB2aWxsYXMlMjBhaXJibmJ8ZW58MHx8MHx8fDA%3D' },
  { title: 'Luxury Stay in Delhi', price: '₹5902 for 2 nights · ★ 4.65', img: 'https://images.unsplash.com/photo-1660324391295-ab5df4558c70?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbXMlMjBhbmQlMjB2aWxsYXMlMjBhaXJibmJ8ZW58MHx8MHx8fDA%3D' },
  { title: 'Sea View in Delhi', price: '₹5939 for 2 nights · ★ 4.77', img: 'https://plus.unsplash.com/premium_photo-1678286771657-cf22aa97faf0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvb21zJTIwYW5kJTIwdmlsbGFzJTIwYWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Loft in Delhi', price: '₹5266 for 2 nights · ★ 4.3', img: 'https://images.unsplash.com/photo-1645640929991-867520dce42a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb21zJTIwYW5kJTIwdmlsbGFzJTIwYWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Sea View in Delhi', price: '₹5080 for 2 nights · ★ 4.85', img: 'https://images.unsplash.com/photo-1587822362457-cc2fc525e083?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb21zJTIwYW5kJTIwdmlsbGFzJTIwYWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Guest House in Delhi', price: '₹5585 for 2 nights · ★ 4.89', img: 'https://images.unsplash.com/photo-1749591047455-9d3d7edb8336?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb21zJTIwYW5kJTIwdmlsbGFzJTIwYWlyYm5ifGVufDB8fDB8fHww' },
  
];

export const goaListings = [
  { title: 'Sea View in Goa', price: '₹5323 for 2 nights · ★ 4.64', img: 'https://images.unsplash.com/photo-1647771167457-c82f4850bb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5iJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D' },
  { title: 'Studio in Goa', price: '₹3789 for 2 nights · ★ 4.35', img: 'https://images.unsplash.com/photo-1648995042551-7828f23f139a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Loft in Goa', price: '₹4720 for 2 nights · ★ 4.41', img: 'https://images.unsplash.com/photo-1648995042233-d3c515b0c053?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' },
  { title: 'Loft in Goa', price: '₹5031 for 2 nights · ★ 4.9', img: 'https://plus.unsplash.com/premium_photo-1686167989783-3eca82199fbc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' },
  { title: 'Room in Goa', price: '₹4846 for 2 nights · ★ 4.78', img: 'https://plus.unsplash.com/premium_photo-1686167990548-b47a5f27023b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8' },
  { title: 'Luxury Stay in Goa', price: '₹4857 for 2 nights · ★ 4.82', img: 'https://plus.unsplash.com/premium_photo-1686167993442-ee5eaab0394f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8' },
  { title: 'Budget Stay in Goa', price: '₹4816 for 2 nights · ★ 4.35', img: 'https://plus.unsplash.com/premium_photo-1686167978316-e075293442bf?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8' },
  { title: 'Guest House in Goa', price: '₹5189 for 2 nights · ★ 4.79', img: 'https://plus.unsplash.com/premium_photo-1686167988053-3c9501537a8d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8' },
  { title: 'Studio in Goa', price: '₹4261 for 2 nights · ★ 4.35', img: 'https://media.istockphoto.com/id/175650155/photo/modern-villa-with-pool-night-scene.jpg?s=612x612&w=0&k=20&c=txrlTlZm0fjqRSdM8SYY_CnGoukeIHUBkiv3CPLnQiI=' },
  
];

export const bangaloreListings = [
  { title: 'Cozy Home in Bangalore', price: '₹5497 for 2 nights · ★ 4.99', img: 'https://www.shutterstock.com/image-photo/paris-feb-12-view-airbnb-apartment-391503340' },
  { title: 'Guest House in Bangalore', price: '₹6444 for 2 nights · ★ 4.95', img: 'https://www.shutterstock.com/image-photo/bangkok-dec-28-view-airbnb-apartment-790211848' },
  { title: 'Cozy Home in Bangalore', price: '₹5145 for 2 nights · ★ 4.43', img: 'https://www.shutterstock.com/image-photo/london-uk-july-12th-2023-apartment-2340343303' },
  { title: 'Luxury Stay in Bangalore', price: '₹4930 for 2 nights · ★ 4.59', img: 'https://www.shutterstock.com/image-photo/big-bed-small-bedroom-clean-comfortable-2498238611' },
  { title: 'Budget Stay in Bangalore', price: '₹6187 for 2 nights · ★ 4.64', img: 'https://www.shutterstock.com/image-photo/amsterdam-april-30-view-interior-airbnb-1721299378' },
  { title: 'Room in Bangalore', price: '₹4537 for 2 nights · ★ 4.87', img: 'https://www.shutterstock.com/image-photo/cozy-dutch-airbnb-room-amsterdam-netherlands-2517172601' },
  
];

export const jaipurListings = [
  { title: 'Loft in Jaipur', price: '₹2936 for 2 nights · ★ 4.65', img: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Luxury Stay in Jaipur', price: '₹4007 for 2 nights · ★ 4.6', img: 'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Villa in Jaipur', price: '₹2804 for 2 nights · ★ 4.76', img: 'https://images.unsplash.com/photo-1711111038475-0dc445eeb97e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww' },
  { title: 'Room in Jaipur', price: '₹3911 for 2 nights · ★ 4.89', img: 'https://images.unsplash.com/photo-1684182309189-a1384f3d7d4c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWlyYm5ifGVufDB8fDB8fHww'},
  { title: 'Luxury Stay in Jaipur', price: '₹3006 for 2 nights · ★ 4.2', img: 'https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Room in Jaipur', price: '₹3443 for 2 nights · ★ 4.38', img: 'https://images.unsplash.com/photo-1679939153963-ff44f5deeba2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Studio in Jaipur', price: '₹3083 for 2 nights · ★ 4.95', img: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpcmJuYnxlbnwwfHwwfHx8MA%3D%3D' },
  
];

export const chennaiListings = [
  { title: 'Budget Stay in Chennai', price: '₹4545 for 2 nights · ★ 4.53', img: 'https://source.unsplash.com/250x150/?chennai,room1' },
  { title: 'Studio in Chennai', price: '₹4031 for 2 nights · ★ 4.21', img: 'https://source.unsplash.com/250x150/?chennai,room2' },
  { title: 'Studio in Chennai', price: '₹4675 for 2 nights · ★ 4.55', img: 'https://source.unsplash.com/250x150/?chennai,room3' },
  { title: 'Luxury Stay in Chennai', price: '₹4577 for 2 nights · ★ 4.59', img: 'https://source.unsplash.com/250x150/?chennai,room4' },
  { title: 'Luxury Stay in Chennai', price: '₹4789 for 2 nights · ★ 4.68', img: 'https://source.unsplash.com/250x150/?chennai,room5' },
  { title: 'Sea View in Chennai', price: '₹4354 for 2 nights · ★ 4.96', img: 'https://source.unsplash.com/250x150/?chennai,room6' },
  { title: 'Loft in Chennai', price: '₹5179 for 2 nights · ★ 4.68', img: 'https://source.unsplash.com/250x150/?chennai,room7' },
  { title: 'Luxury Stay in Chennai', price: '₹5392 for 2 nights · ★ 4.37', img: 'https://source.unsplash.com/250x150/?chennai,room8' },
  { title: 'Guest House in Chennai', price: '₹4985 for 2 nights · ★ 4.33', img: 'https://source.unsplash.com/250x150/?chennai,room9' },
  { title: 'Sea View in Chennai', price: '₹5025 for 2 nights · ★ 4.61', img: 'https://source.unsplash.com/250x150/?chennai,room10' },
];

export const hyderabadListings = [
  { title: 'Room in Hyderabad', price: '₹4061 for 2 nights · ★ 4.99', img: 'https://source.unsplash.com/250x150/?hyderabad,room1' },
  { title: 'Room in Hyderabad', price: '₹5004 for 2 nights · ★ 4.71', img: 'https://source.unsplash.com/250x150/?hyderabad,room2' },
  { title: 'Loft in Hyderabad', price: '₹3723 for 2 nights · ★ 4.9', img: 'https://source.unsplash.com/250x150/?hyderabad,room3' },
  { title: 'Villa in Hyderabad', price: '₹4320 for 2 nights · ★ 4.84', img: 'https://source.unsplash.com/250x150/?hyderabad,room4' },
  { title: 'Villa in Hyderabad', price: '₹4464 for 2 nights · ★ 4.62', img: 'https://source.unsplash.com/250x150/?hyderabad,room5' },
  { title: 'Cozy Home in Hyderabad', price: '₹3373 for 2 nights · ★ 4.32', img: 'https://source.unsplash.com/250x150/?hyderabad,room6' },
  { title: 'Flat in Hyderabad', price: '₹4804 for 2 nights · ★ 4.86', img: 'https://source.unsplash.com/250x150/?hyderabad,room7' },
  { title: 'Studio in Hyderabad', price: '₹4001 for 2 nights · ★ 4.44', img: 'https://source.unsplash.com/250x150/?hyderabad,room8' },
  { title: 'Villa in Hyderabad', price: '₹3365 for 2 nights · ★ 4.89', img: 'https://source.unsplash.com/250x150/?hyderabad,room9' },
  { title: 'Guest House in Hyderabad', price: '₹4151 for 2 nights · ★ 4.61', img: 'https://source.unsplash.com/250x150/?hyderabad,room10' },
];





export const destinations = [
  { name: "Nearby", description: "Find what’s around you", icon: "navigation" },
  { name: "Mumbai, Maharashtra", description: "For nightlife and coastal vibes", icon: "building" },
  { name: "Delhi, Delhi", description: "For historical architecture", icon: "landmark" },
  { name: "Bangalore, Karnataka", description: "For tech and weather", icon: "circuit" },
  { name: "Chennai, Tamil Nadu", description: "For temples and beaches", icon: "treePalm" },
  { name: "Kolkata, West Bengal", description: "For culture and food", icon: "train" },
  { name: "Hyderabad, Telangana", description: "For biryani and Charminar", icon: "wheat" },
  { name: "Pune, Maharashtra", description: "For students and hills", icon: "leaf" },
  { name: "Jaipur, Rajasthan", description: "For royal palaces", icon: "tent" },
  { name: "Goa", description: "For beaches and parties", icon: "tenttree" },
  { name: "Udaipur, Rajasthan", description: "For lakes and palaces", icon: "globe" },
  { name: "Manali, Himachal Pradesh", description: "For snow and mountains", icon: "mountain" },
  { name: "Shimla, Himachal Pradesh", description: "For colonial charm", icon: "hotel" },
  { name: "Varanasi, Uttar Pradesh", description: "For spiritual experiences", icon: "scrollText" },
  { name: "Rishikesh, Uttarakhand", description: "For yoga and rivers", icon: "school" },
  { name: "Leh, Ladakh", description: "For mountains and monasteries", icon: "castle" },
  { name: "Aizawl, Mizoram", description: "For Northeast hill culture", icon: "bus" },
  { name: "Darjeeling, West Bengal", description: "For tea and views", icon: "utensils" },
  { name: "Kochi, Kerala", description: "For backwaters and history", icon: "plane" },
  { name: "Mysore, Karnataka", description: "For heritage and palaces", icon: "landmark" }
];


