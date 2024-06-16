import {UpCircleFilled} from '@ant-design/icons'
const ScrollToTop = () => {
  return (
    <a href="#top" className='absolute bottom-0 right-0'>
        <button className=' mr-4 text-4xl text-blue-600 bg-slate-200 rounded-full animate-bounce'>
        <UpCircleFilled />
        </button>
    </a>
  )
}

export default ScrollToTop