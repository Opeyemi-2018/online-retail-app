import speaker1 from '../assets/images/speaker-1.png'
import speaker2 from '../assets/images/speaker-2.png'
import speaker3 from '../assets/images/speaker-3.png'
import speaker4 from '../assets/images/speaker-4.png'
import speaker5 from '../assets/images/speaker-5.png'
import speaker6 from '../assets/images/speaker-6.png'

import headset1 from '../assets/images/head-set-1.png'
import headset2 from '../assets/images/head-set-2.png'
import headset3 from '../assets/images/head-set-3.png'
import headset4 from '../assets/images/head-set-4.png'
import headset5 from '../assets/images/head-set-5.png'
import headset6 from '../assets/images/head-set-6.png'

import series1 from '../assets/images/series-1.png'
import series2 from '../assets/images/series-2.png'
import series3 from '../assets/images/series-3.png'
import series4 from '../assets/images/series-4.png'
import series5 from '../assets/images/series-5.png'

import camera1 from '../assets/images/camera-1.png'
import camera2 from '../assets/images/camera-2.png'
import camera3 from '../assets/images/camera-3.png'
import camera4 from '../assets/images/camera-4.png'

import camcoder1 from '../assets/images/camcoder-1.png'
import camcoder2 from '../assets/images/camcoder-2.png'
import camcoder3 from '../assets/images/camcoder-3.png'
import camcoder4 from '../assets/images/camcoder-4.png'

let products = [
    { id: '1', category: 'headphones', image: headset1, name: 'HEADPHONES', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '2', type: 'gadget', category: 'speaker', image: speaker1, name: 'SPEAKER', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '3', type: 'gadget', category: 'camcoder', image: camcoder1, name: 'CAMCODER', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '4', type: 'gadget', category: 'series', image: series1, name: 'SERIES', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '5', type: 'gadget', category: 'series', image: series2, name: 'SERIES', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '6', type: 'gadget', category: 'camcoder', image: camcoder2, name: 'CAMCODER', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '7', type: 'gadget', category: 'speaker', image: speaker2, name: 'SPEAKER', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '8', type: 'gadget', category: 'speaker', image: speaker3, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '9', type: 'gadget', category: 'speaker', image: speaker4, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '10', type: 'gadget', category: 'speaker', image: speaker5, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '11', type: 'gadget', category: 'speaker', image: speaker6, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '12', type: 'gadget', category: 'headphones', image: headset2, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '13', type: 'gadget', category: 'headphones', image: headset3, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '14', type: 'gadget', category: 'headphones', image: headset4, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '15', type: 'gadget', category: 'headphones', image: headset5, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '16', type: 'gadget', category: 'headphones', image: headset6, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '17', category: 'series', image: series3, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '18', type: 'gadget', category: 'series', image: series4, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '19', type: 'gadget', category: 'series', image: series5, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '20', type: 'gadget', category: 'camera', image: camera1, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '21', type: 'gadget', category: 'camera', image: camera2, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '22', type: 'gadget', category: 'camera', image: camera3, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '23', type: 'gadget', category: 'camera', image: camera4, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '24', type: 'gadget', category: 'camcoder', image: camcoder3, name: 'camcoder', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '24', type: 'gadget', category: 'camcoder', image: camcoder4, name: 'camcoder', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
]

export default products