import React from 'react'
import DeafultHOC from "../Layouts/Deafult.Layout"
//Componenets
import Posters from "../Posters/Poster"
import PlayFilters from '../component/PlayFilters/PlayFilters'

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in NCR Delhi</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-with-love-jaspreet-0-2022-8-13-t-14-51-48.jpg"
                  title="With love, Jaspreet"
                  subtitle="Comedy Shows | English, Hindi | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aap-maanoge-nahi-standup-by-inder-sahani-0-2022-8-15-t-8-48-9.jpg"
                  title="Aap Maanoge Nahi - Standup by Inder Sahani"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-gupta-live-0-2022-8-10-t-10-59-32.jpg"
                  title="Gaurav Gupta Live"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                  title="Sunburn Arena ft. DJ SNAKE - Delhi NCR"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-anubhuti-uttarakhand-0-2022-8-17-t-7-27-25.jpg"
                  title="Anubhuti Uttarakhand"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-standup-comedy-shows-ft-gaurav-gupta-0-2022-9-16-t-14-57-17.jpg"
                  title="Standup Comedy Shows ft. Gaurav Gupta"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                  title="Suhani Shah - Kahaani India Tour"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-supermoon-ft-b-praak-king-of-hearts-tour-gurugram-0-2022-6-8-t-15-51-27.jpg"
                  title="Supermoon ft B Praak King of Hearts Tour- Gurugram"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
        {/* 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31104.23539200534!2d77.61554!3d12.969969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c80b1ca7533de73!2zMTLCsDU4JzExLjkiTiA3N8KwMzYnNTUuOSJF!5e0!3m2!1sen!2sus!4v1663427476353!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="play location"
        ></iframe> */}
      </div>
    </>
  );
};



export default DeafultHOC(Plays)