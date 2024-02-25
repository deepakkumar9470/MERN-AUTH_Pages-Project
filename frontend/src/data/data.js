import home from "../assets/home.svg";
import singer from "../assets/singer.svg";
import weddingnew from "../assets/icons/couple.png";
import partynew from "../assets/icons/party.png";
import femaledancing from "../assets/icons/female-dancing.png";

import events from "../assets/banner/events.png";
import pandit from "../assets/banner/pandit.png";
import weddingbanner from "../assets/banner/wedding.png";

import wedding_couple from "../assets/category/wedding.png";
import pandit_banner from "../assets/category/pandit-new.png";
import girl_singing from "../assets/category/girl_singing-new.png";
import events_banner from "../assets/category/girl _listening.png";

export const linksData = [
  {
    title: "Home",
    iconUrl: home,
    url: "/",
  },
  {
    title: "Wedding",
    iconUrl: weddingnew,
    url: "/",
  },
  {
    title: "Event",
    iconUrl: partynew,
    url: "/",
  },
  {
    title: "Dancer",
    iconUrl: femaledancing,
    url: "/",
  },
  {
    title: "Singer",
    iconUrl: singer,
    url: "/",
  },
];

export const categories = [
  { title: "Event", imageUrl: events },
  { title: "Pandit", imageUrl: pandit },
  { title: "Wedding", imageUrl: weddingbanner },
  { title: "Event", imageUrl: events },
  { title: "Wedding", imageUrl: weddingbanner },
  { title: "Pandit", imageUrl: pandit }
];

export const catCards = [
  { title: "Wedding Choose", desc: "Best plans and location", imageUrl: wedding_couple },
  { title: "Pandit Booking", desc: "Best pandit near you", imageUrl: pandit_banner },
  { title: "Singer & Dancer", desc: "Popular", imageUrl: girl_singing },
  { title: "Events Booking", desc: "Book tikets Best price", imageUrl: events_banner },

];
