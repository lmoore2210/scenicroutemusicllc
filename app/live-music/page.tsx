'use client';

import React, { useState, useMemo } from 'react';
import { 
  Guitar, 
  Users, 
  Search, 
  Calendar, 
  Radio,
  Music,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';
import { SpotifyIcon, YouTubeIcon, InstagramIcon } from '@/components/SocialIcons';
import LivePerformancePlayer from '@/components/LivePerformancePlayer';
import LiveMusicSlideshow from '@/components/LiveMusicSlideshow';
import { submitLeadToEmail } from '@/lib/emailService';

interface ShowEvent {
  id: string;
  month: string;
  day: string;
  year: string;
  dayOfWeek: string;
  time: string;
  venue: string;
  city: string;
  format: string;
  details: string;
  ticketStatus: string;
  link?: string;
}

// ✦ ADD OR UPDATE UPCOMING SHOWS & TOUR DATES HERE ✦
const UPCOMING_SHOWS: ShowEvent[] = [
  {
    id: 'show-blue-room',
    month: 'SEP',
    day: '18',
    year: '2026',
    dayOfWeek: 'Friday',
    time: '9:00 PM',
    venue: 'The Blue Room',
    city: 'Bellingham, WA',
    format: 'with J.Chang and the Lover Boys',
    details: 'Live performance in Downtown Bellingham with J.Chang and the Lover Boys.',
    ticketStatus: 'Show at 9:00 PM',
    link: 'https://www.instagram.com/lukemooreguitar'
  },
  {
    id: 'show-beach-cat',
    month: 'SEP',
    day: '25',
    year: '2026',
    dayOfWeek: 'Friday',
    time: 'Evening Show',
    venue: 'Beach Cat Brewing',
    city: 'Birch Bay / Blaine, WA',
    format: 'with J.Chang and the Lover Boys',
    details: 'Live brewery stage set with J.Chang and the Lover Boys.',
    ticketStatus: 'Free / All Ages',
    link: 'https://www.instagram.com/lukemooreguitar'
  }
];

interface Song {
  title: string;
  artist: string;
  category: string;
}

const MASTER_SONG_CATALOG: Song[] = [
  {
    "title": "Take On Me",
    "artist": "A-ha",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Wake Me Up",
    "artist": "Avicii",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I Want It That Way",
    "artist": "Backstreet Boys",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Uptown Funk",
    "artist": "Bruno Mars",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Marry You",
    "artist": "Bruno Mars",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Just the Way You Are",
    "artist": "Bruno Mars",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Tubthumping",
    "artist": "Chumbawamba",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Time After Time",
    "artist": "Cyndi Lauper",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Get Lucky",
    "artist": "Daft Punk",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "September",
    "artist": "Earth, Wind & Fire",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Faith",
    "artist": "George Michael",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I Will Survive",
    "artist": "Gloria Gaynor",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Daylight",
    "artist": "Harry Styles",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Watermelon Sugar",
    "artist": "Harry Styles",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I'm Yours",
    "artist": "Jason Mraz",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "All Time Low",
    "artist": "Jon Bellion",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Walking On Sunshine",
    "artist": "Katrina and the Waves",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Royals",
    "artist": "Lorde",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Valerie",
    "artist": "Mark Ronson & Amy Winehouse",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Flowers",
    "artist": "Miley Cyrus",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I Melt With You",
    "artist": "Modern English",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Born To Be Alive",
    "artist": "Patrick Hernandez",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Circles",
    "artist": "Post Malone",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Loving Is Easy",
    "artist": "Rex Orange County",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "All Star",
    "artist": "Smash Mouth",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Tainted Love",
    "artist": "Soft Cell",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Fly",
    "artist": "Sugar Ray",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Everybody Wants To Rule The World",
    "artist": "Tears For Fears",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Head Over Heels",
    "artist": "Tears For Fears",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I Believe In A Thing Called Love",
    "artist": "The Darkness / Branches",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I'm A Believer",
    "artist": "The Monkees",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I'm Gonna Be (500 Miles)",
    "artist": "The Proclaimers",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "What I Like About You",
    "artist": "The Romantics",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "No Scrubs",
    "artist": "TLC",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Shut Up and Dance",
    "artist": "Walk the Moon",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Teenage Dirtbag",
    "artist": "Wheatus",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "I Wanna Dance with Somebody",
    "artist": "Whitney Houston",
    "category": "Pop, Dance & Upbeat Hits"
  },
  {
    "title": "Don't Cross The River",
    "artist": "America",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Sister Golden Hair",
    "artist": "America",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Tin Man",
    "artist": "America",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Feel Like Makin' Love",
    "artist": "Bad Company",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Piano Man",
    "artist": "Billy Joel",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Vienna",
    "artist": "Billy Joel",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Till It Shines",
    "artist": "Bob Seger & The Silver Bullet Band",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Livin' on a Prayer",
    "artist": "Bon Jovi",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Wanted Dead Or Alive",
    "artist": "Bon Jovi",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "For What It's Worth",
    "artist": "Buffalo Springfield",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Johnny B. Goode",
    "artist": "Chuck Berry",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Southern Cross",
    "artist": "Crosby, Stills & Nash",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Space Oddity",
    "artist": "David Bowie",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "The Boys Of Summer",
    "artist": "Don Henley",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Hotel California",
    "artist": "Eagles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Learn To Be Still",
    "artist": "Eagles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "New Kid In Town",
    "artist": "Eagles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Rocket Man",
    "artist": "Elton John",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Tiny Dancer",
    "artist": "Elton John",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Heartbreak Hotel",
    "artist": "Elvis Presley",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Lay Down Sally",
    "artist": "Eric Clapton",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Sweet Dreams (Are Made Of This)",
    "artist": "Eurythmics",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Dreams",
    "artist": "Fleetwood Mac",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Go Your Own Way",
    "artist": "Fleetwood Mac",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Gold Dust Woman",
    "artist": "Fleetwood Mac",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Landslide",
    "artist": "Fleetwood Mac",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Rhiannon",
    "artist": "Fleetwood Mac",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Sweet Child O' Mine",
    "artist": "Guns N' Roses",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Never Tear Us Apart",
    "artist": "INXS",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Somebody To Love",
    "artist": "Jefferson Airplane",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "You Don't Mess Around With Jim",
    "artist": "Jim Croce",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "All Along The Watchtower",
    "artist": "Jimi Hendrix",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Don't Stop Believin'",
    "artist": "Journey",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Going To California",
    "artist": "Led Zeppelin",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Ramble On",
    "artist": "Led Zeppelin",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Willin'",
    "artist": "Little Feat",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Call Me The Breeze",
    "artist": "Lynyrd Skynyrd",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Free Bird",
    "artist": "Lynyrd Skynyrd",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Simple Man",
    "artist": "Lynyrd Skynyrd",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Sweet Home Alabama",
    "artist": "Lynyrd Skynyrd",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Sweet Caroline",
    "artist": "Neil Diamond",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Cinnamon Girl",
    "artist": "Neil Young",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Down By The River",
    "artist": "Neil Young",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Heart Of Gold",
    "artist": "Neil Young",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Old Man",
    "artist": "Neil Young",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Comfortably Numb",
    "artist": "Pink Floyd",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Wish You Were Here",
    "artist": "Pink Floyd",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Brass In Pocket",
    "artist": "Pretenders",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Crazy Little Thing Called Love",
    "artist": "Queen",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Don't You (Forget About Me)",
    "artist": "Simple Minds",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Stuck In The Middle With You",
    "artist": "Stealers Wheel",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Dirty Work",
    "artist": "Steely Dan",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Fly Like An Eagle",
    "artist": "Steve Miller Band",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "The Joker",
    "artist": "Steve Miller Band",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Edge Of Seventeen",
    "artist": "Stevie Nicks",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "House Of The Rising Sun",
    "artist": "The Animals",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "The Weight",
    "artist": "The Band",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Up On Cripple Creek",
    "artist": "The Band",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Barbara Ann",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Don't Worry Baby",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "God Only Knows",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Good Vibrations",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "I Can Hear Music",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "I Get Around",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "In My Room",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Kokomo",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Surfin' USA",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Wouldn't It Be Nice",
    "artist": "The Beach Boys",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Blackbird",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Come Together",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Day Tripper",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Dear Prudence",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Don't Let Me Down",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Here Comes The Sun",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Hey Jude",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "I've Got A Feeling",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "In My Life",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Let It Be",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Lucy In The Sky With Diamonds",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Oh! Darling",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Rock And Roll Music",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Something",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Taxman",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Twist and Shout",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Two Of Us",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "With A Little Help From My Friends",
    "artist": "The Beatles",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Just What I Needed",
    "artist": "The Cars",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "My Best Friend's Girl",
    "artist": "The Cars",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Should I Stay Or Should I Go",
    "artist": "The Clash",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Black Water",
    "artist": "The Doobie Brothers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Listen to the Music",
    "artist": "The Doobie Brothers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Beast Of Burden",
    "artist": "The Rolling Stones",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Honky Tonk Women",
    "artist": "The Rolling Stones",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Wild Horses",
    "artist": "The Rolling Stones",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "You Can't Always Get What You Want",
    "artist": "The Rolling Stones",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Walk Don't Run",
    "artist": "The Ventures",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "American Girl",
    "artist": "Tom Petty & The Heartbreakers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Breakdown",
    "artist": "Tom Petty & The Heartbreakers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Free Fallin'",
    "artist": "Tom Petty & The Heartbreakers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Mary Jane's Last Dance",
    "artist": "Tom Petty & The Heartbreakers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Wildflowers",
    "artist": "Tom Petty & The Heartbreakers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "You Don't Know How It Feels",
    "artist": "Tom Petty & The Heartbreakers",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Brown Eyed Girl",
    "artist": "Van Morrison",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "Here I Go Again",
    "artist": "Whitesnake",
    "category": "Classic Rock & 60s/70s/80s Anthems"
  },
  {
    "title": "What's Up",
    "artist": "4 Non Blondes",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Hand In My Pocket",
    "artist": "Alanis Morissette",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Ironic",
    "artist": "Alanis Morissette",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "You Oughta Know",
    "artist": "Alanis Morissette",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "No Excuses",
    "artist": "Alice In Chains",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Rooster",
    "artist": "Alice In Chains",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "No Rain",
    "artist": "Blind Melon",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Ain't No Rest For The Wicked",
    "artist": "Cage the Elephant",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Cigarette Daydreams",
    "artist": "Cage the Elephant",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Trouble",
    "artist": "Cage the Elephant",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Clocks",
    "artist": "Coldplay",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Green Eyes",
    "artist": "Coldplay",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Yellow",
    "artist": "Coldplay",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Shine",
    "artist": "Collective Soul",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Accidentally In Love",
    "artist": "Counting Crows",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Big Yellow Taxi",
    "artist": "Counting Crows",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Mr. Jones",
    "artist": "Counting Crows",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Don't Dream It's Over",
    "artist": "Crowded House",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "I Will Follow You Into The Dark",
    "artist": "Death Cab for Cutie",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Driving With The Brakes On",
    "artist": "Del Amitri",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Roll To Me",
    "artist": "Del Amitri",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Personal Jesus",
    "artist": "Depeche Mode",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Save Tonight",
    "artist": "Eagle-Eye Cherry",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Torn",
    "artist": "Ednaswap",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Inside Out",
    "artist": "Eve 6",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Everlong",
    "artist": "Foo Fighters",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Learn To Fly",
    "artist": "Foo Fighters",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "This Is A Call",
    "artist": "Foo Fighters",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Stacy's Mom",
    "artist": "Fountains of Wayne",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Found Out About You",
    "artist": "Gin Blossoms",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Hey Jealousy",
    "artist": "Gin Blossoms",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Clint Eastwood",
    "artist": "Gorillaz",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Basket Case",
    "artist": "Green Day",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Good Riddance (Time Of Your Life)",
    "artist": "Green Day",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Warning",
    "artist": "Green Day",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "When I Come Around",
    "artist": "Green Day",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Flagpole Sitta",
    "artist": "Harvey Danger",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Lips Of An Angel",
    "artist": "Hinder",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Hold My Hand",
    "artist": "Hootie & the Blowfish",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Only Wanna Be With You",
    "artist": "Hootie & the Blowfish",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Drive",
    "artist": "Incubus",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Are You Gonna Be My Girl",
    "artist": "Jet",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The Middle",
    "artist": "Jimmy Eat World",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Black Horse And The Cherry Tree",
    "artist": "KT Tunstall",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Suddenly I See",
    "artist": "KT Tunstall",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Harder To Breathe",
    "artist": "Maroon 5",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Sunday Morning",
    "artist": "Maroon 5",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "3AM",
    "artist": "Matchbox Twenty",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Evangeline",
    "artist": "Matthew Sweet",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Someone To Pull The Trigger",
    "artist": "Matthew Sweet",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Fade Into You",
    "artist": "Mazzy Star",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "I'm The Only One",
    "artist": "Melissa Etheridge",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Down Under",
    "artist": "Men At Work / Colin Hay",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Overkill",
    "artist": "Men At Work / Colin Hay",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Starlight",
    "artist": "Muse",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Supermassive Black Hole",
    "artist": "Muse",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Helena",
    "artist": "My Chemical Romance",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Teenagers",
    "artist": "My Chemical Romance",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "You Get What You Give",
    "artist": "New Radicals",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Heart-Shaped Box",
    "artist": "Nirvana",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The Man Who Sold The World",
    "artist": "Nirvana",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Champagne Supernova",
    "artist": "Oasis",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Don't Look Back in Anger",
    "artist": "Oasis",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Wonderwall",
    "artist": "Oasis",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Losing My Religion",
    "artist": "R.E.M.",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The One I Love",
    "artist": "R.E.M.",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Uberlin",
    "artist": "R.E.M.",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Creep",
    "artist": "Radiohead",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "High And Dry",
    "artist": "Radiohead",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Breaking The Girl",
    "artist": "Red Hot Chili Peppers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Californication",
    "artist": "Red Hot Chili Peppers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Road Trippin'",
    "artist": "Red Hot Chili Peppers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Soul To Squeeze",
    "artist": "Red Hot Chili Peppers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The Zephyr Song",
    "artist": "Red Hot Chili Peppers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Under The Bridge",
    "artist": "Red Hot Chili Peppers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Send Me On My Way",
    "artist": "Rusted Root",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "All I Wanna Do",
    "artist": "Sheryl Crow",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The First Cut Is The Deepest",
    "artist": "Sheryl Crow",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "All For You",
    "artist": "Sister Hazel",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Kiss Me",
    "artist": "Sixpence None The Richer",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Black Hole Sun",
    "artist": "Soundgarden",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Interstate Love Song",
    "artist": "Stone Temple Pilots",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Plush",
    "artist": "Stone Temple Pilots",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Badfish",
    "artist": "Sublime",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Santeria",
    "artist": "Sublime",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "What I Got",
    "artist": "Sublime",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The Less I Know The Better",
    "artist": "Tame Impala",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Psychotic Girl",
    "artist": "The Black Keys",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Dreams",
    "artist": "The Cranberries",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Linger",
    "artist": "The Cranberries",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Zombie",
    "artist": "The Cranberries",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Just Like Heaven",
    "artist": "The Cure",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Lovesong",
    "artist": "The Cure",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Down By The Water",
    "artist": "The Decemberists",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Somewhere Down The Barrel",
    "artist": "The Dissociatives",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Mr. Brightside",
    "artist": "The Killers",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "There She Goes",
    "artist": "The La's",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "1979",
    "artist": "The Smashing Pumpkins",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Disarm",
    "artist": "The Smashing Pumpkins",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Seven Nation Army",
    "artist": "The White Stripes",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "How's It Going To Be",
    "artist": "Third Eye Blind",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Jumper",
    "artist": "Third Eye Blind",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Semi-Charmed Life",
    "artist": "Third Eye Blind",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "In The Summertime",
    "artist": "Thirsty Merc",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "My Completeness",
    "artist": "Thirsty Merc",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Sober",
    "artist": "Tool",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Drops Of Jupiter",
    "artist": "Train",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Ride",
    "artist": "twenty one pilots",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Stressed Out",
    "artist": "twenty one pilots",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Blister In The Sun",
    "artist": "Violent Femmes",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Buddy Holly",
    "artist": "Weezer",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Island in the Sun",
    "artist": "Weezer",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "Say It Ain't So",
    "artist": "Weezer",
    "category": "90s & 2000s Alternative / Indie Rock"
  },
  {
    "title": "The English And Western Stallion",
    "artist": "Aaron Freeman",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Blowin' in the Wind",
    "artist": "Bob Dylan",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Don't Think Twice, It's All Right",
    "artist": "Bob Dylan",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Pacing The Cage",
    "artist": "Bruce Cockburn",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Starting Over",
    "artist": "Chris Stapleton",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Tennessee Whiskey",
    "artist": "Chris Stapleton",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "You Should Probably Leave",
    "artist": "Chris Stapleton",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Boy And A Bird Dog",
    "artist": "Colby Acuff",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Look At Us Now (Honeycomb)",
    "artist": "Daisy Jones And The Six",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Wagon Wheel",
    "artist": "Darius Rucker",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "House Parties",
    "artist": "Dawes",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "When The Tequila Runs Out",
    "artist": "Dawes",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Jolene",
    "artist": "Dolly Parton",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Real Love Baby",
    "artist": "Father John Misty",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Well You Can Do It Without Me",
    "artist": "Father John Misty",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Cruise",
    "artist": "Florida Georgia Line",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "If You Could Read My Mind",
    "artist": "Gordon Lightfoot",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Ah Mary",
    "artist": "Grace Potter and the Nocturnals",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Paris (Ooh La La)",
    "artist": "Grace Potter and the Nocturnals",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Nobody Dies From Weed",
    "artist": "Hayes & The Heathens",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Take Me To Church",
    "artist": "Hozier",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Closer To Fine",
    "artist": "Indigo Girls",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Galileo",
    "artist": "Indigo Girls",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Love Interruption",
    "artist": "Jack White",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Love Is Selfish",
    "artist": "Jack White",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Gone Wanderin'",
    "artist": "Jackie Greene",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "A Pirate Looks At Forty",
    "artist": "Jimmy Buffett",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Margaritaville",
    "artist": "Jimmy Buffett",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Take Me Home, Country Roads",
    "artist": "John Denver",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Jack & Diane",
    "artist": "John Mellencamp",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Pink Houses",
    "artist": "John Mellencamp",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "R.O.C.K. In The U.S.A.",
    "artist": "John Mellencamp",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Angel From Montgomery",
    "artist": "John Prine",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Ghost",
    "artist": "Josiah and the Bonnevilles",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Blue On Black",
    "artist": "Kenny Wayne Shepherd",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Texas Sun",
    "artist": "Khruangbin & Leon Bridges",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "We Belong",
    "artist": "Lowen And Navarro",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Essence",
    "artist": "Lucinda Williams",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "California Gold",
    "artist": "Luke Moore",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "I Want You",
    "artist": "Luke Moore",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Scar",
    "artist": "Missy Higgins",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Cover Me Up",
    "artist": "Morgan Wallen",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Fishin' In The Dark",
    "artist": "Nitty Gritty Dirt Band",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Champaign, Illinois",
    "artist": "Old 97's",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "I Was Born To Love You",
    "artist": "Ray LaMontagne",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "You Are the Best Thing",
    "artist": "Ray LaMontagne",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "To Be Young (Is To Be Sad, Is To Be High)",
    "artist": "Ryan Adams",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Melissa",
    "artist": "The Allman Brothers Band",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Ramblin' Man",
    "artist": "The Allman Brothers Band",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Ho Hey",
    "artist": "The Lumineers",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Charleston Girl",
    "artist": "Tyler Childers",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Feathered Indians",
    "artist": "Tyler Childers",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Dawned On Me",
    "artist": "Wilco",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Chicken Fried",
    "artist": "Zac Brown Band",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Colder Weather",
    "artist": "Zac Brown Band",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Something In The Orange",
    "artist": "Zach Bryan",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "Put The Gun Down",
    "artist": "ZZ Ward",
    "category": "Americana, Country, Folk & Roots"
  },
  {
    "title": "If I Ain't Got You",
    "artist": "Alicia Keys",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Let's Stay Together",
    "artist": "Al Green",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Rehab",
    "artist": "Amy Winehouse",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "The Thrill Is Gone",
    "artist": "B.B. King",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Stand by Me",
    "artist": "Ben E. King",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Burn One Down",
    "artist": "Ben Harper",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Ain't No Sunshine",
    "artist": "Bill Withers",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Lean on Me",
    "artist": "Bill Withers",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Use Me",
    "artist": "Bill Withers",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Colors",
    "artist": "Black Pumas",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Touch The Sky",
    "artist": "Black Pumas",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Three Little Birds",
    "artist": "Bob Marley",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Waiting In Vain",
    "artist": "Bob Marley",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Easy",
    "artist": "Commodores",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Drift Away",
    "artist": "Dobie Gray",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Crazy",
    "artist": "Gnarls Barkley",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Just The Two Of Us",
    "artist": "Grover Washington Jr. & Bill Withers",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "All of Me",
    "artist": "John Legend",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Gravity",
    "artist": "John Mayer",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Slow Dancing In A Burning Room",
    "artist": "John Mayer",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Waiting On The World To Change",
    "artist": "John Mayer",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Beyond",
    "artist": "Leon Bridges",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Coming Home",
    "artist": "Leon Bridges",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Teardrop",
    "artist": "Massive Attack",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Soul's A Fire",
    "artist": "Matt Corby",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Don't Know Why",
    "artist": "Norah Jones",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Sittin' On The Dock Of The Bay",
    "artist": "Otis Redding",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Please Send Me Someone To Love",
    "artist": "Percy Mayfield",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Hit The Road Jack",
    "artist": "Ray Charles",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Kiss From A Rose",
    "artist": "Seal",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Mary Had A Little Lamb",
    "artist": "Stevie Ray Vaughan",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Pride And Joy",
    "artist": "Stevie Ray Vaughan",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Higher Ground",
    "artist": "Stevie Wonder",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "I Wish",
    "artist": "Stevie Wonder",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Isn't She Lovely",
    "artist": "Stevie Wonder",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Signed, Sealed, Delivered I'm Yours",
    "artist": "Stevie Wonder",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Superstition",
    "artist": "Stevie Wonder",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "You Are the Sunshine of My Life",
    "artist": "Stevie Wonder",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Take Me To River",
    "artist": "Talking Heads",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "This Must Be The Place (Naive Melody)",
    "artist": "Talking Heads",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Lose Control",
    "artist": "Teddy Swims",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Don't Change Horses (In The Middle Of A Stream)",
    "artist": "Tower of Power",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Fast Car",
    "artist": "Tracy Chapman",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "Give Me One Reason",
    "artist": "Tracy Chapman",
    "category": "Soul, R&B, Motown & Funk"
  },
  {
    "title": "The Rose",
    "artist": "Bette Midler",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "Bellyache",
    "artist": "Billie Eilish",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "Your Power",
    "artist": "Billie Eilish",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "Something To Talk About",
    "artist": "Bonnie Raitt",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "Fly Me To The Moon",
    "artist": "Frank Sinatra",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "My Way",
    "artist": "Frank Sinatra",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "The Way You Look Tonight",
    "artist": "Frank Sinatra",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "What a Wonderful World",
    "artist": "Louis Armstrong",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "L-O-V-E",
    "artist": "Nat King Cole",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "Unforgettable",
    "artist": "Nat King Cole",
    "category": "Jazz Standards, Traditional & Easy Listening"
  },
  {
    "title": "White Christmas",
    "artist": "Bing Crosby",
    "category": "Holiday & Seasonal Classics"
  },
  {
    "title": "Jingle Bell Rock",
    "artist": "Bobby Helms",
    "category": "Holiday & Seasonal Classics"
  },
  {
    "title": "Rockin' Around The Christmas Tree",
    "artist": "Brenda Lee",
    "category": "Holiday & Seasonal Classics"
  },
  {
    "title": "Blue Christmas",
    "artist": "Elvis Presley",
    "category": "Holiday & Seasonal Classics"
  },
  {
    "title": "All I Want For Christmas Is You",
    "artist": "Mariah Carey",
    "category": "Holiday & Seasonal Classics"
  }
];

export default function LiveMusicPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    format: "Solo Acoustic (Americana & Songwriting)",
    eventType: "Wedding / Reception",
    date: "",
    location: "Bellingham / Western WA",
    specialSongs: "",
    details: ""
  });

  const categories = [
    "All",
    "Pop, Dance & Upbeat Hits",
    "Classic Rock & 60s/70s/80s Anthems",
    "90s & 2000s Alternative / Indie Rock",
    "Americana, Country, Folk & Roots",
    "Soul, R&B, Motown & Funk",
    "Jazz Standards, Traditional & Easy Listening",
    "Holiday & Seasonal Classics"
  ];

  const filteredSongs = useMemo(() => {
    return MASTER_SONG_CATALOG.filter((song) => {
      const matchesCategory = selectedCategory === "All" || song.category === selectedCategory;
      const matchesSearch = 
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Forward live music booking inquiry to scenicroutemusicllc@gmail.com
    submitLeadToEmail({
      subject: `[Live Music Booking] ${formData.name} - ${formData.eventType}`,
      name: formData.name,
      email: formData.email,
      format: formData.format,
      eventType: formData.eventType,
      date: formData.date || "Not specified",
      location: formData.location,
      specialSongs: formData.specialSongs || "None specified",
      details: formData.details,
      formType: "Live Music Booking Request"
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      format: "Solo Acoustic (Americana & Songwriting)",
      eventType: "Wedding / Reception",
      date: "",
      location: "Bellingham / Western WA",
      specialSongs: "",
      details: ""
    });
    setFormSubmitted(false);
  };

  return (
    <div style={{ minHeight: "100%", paddingBottom: "60px" }}>
      
      {/* HERO SECTION WITH IMAGE */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px 48px 20px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center"
        }}>
          <div>
            <h1 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.1,
              color: "#ffffff",
              margin: "0 0 20px 0",
              fontWeight: 700
            }}>
              Luke Moore <br />
              <span style={{ color: "#d4af37", fontStyle: "italic" }}>
                Americana Singer-Songwriter &amp; Performer
              </span>
            </h1>

            <p style={{
              fontSize: "16px",
              color: "#d5cec2",
              lineHeight: 1.75,
              marginBottom: "32px",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}>
              Authentic, soulful roots music grounded in the storytelling traditions of Americana, with a flair of psychedelic rock and outlaw country. Based in Bellingham, Washington, Luke Moore performs for any event space, any time!
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#book" style={{
                padding: "14px 28px",
                backgroundColor: "#d4af37",
                color: "#0a0a0a",
                fontWeight: 800,
                fontSize: "13px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #f5ecd7",
                boxShadow: "0 4px 15px rgba(212,175,55,0.35)",
                fontFamily: "'Courier New', Courier, monospace, sans-serif"
              }}>
                <Calendar size={16} color="#0a0a0a" /> Book Performance
              </a>
            </div>
          </div>

          {/* LIVE PERFORMANCE VIDEO PLAYER (EMBEDDED YOUTUBE VIDEOS) */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <LivePerformancePlayer />
          </div>

        </div>
      </section>

      {/* UPCOMING SHOWS & EVENT CALENDAR */}
      <section id="shows" style={{
        backgroundColor: "#070707",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "60px 20px"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px"
          }}>
            <div>
              <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                Live Tour &amp; Gig Schedule
              </span>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#ffffff", margin: "4px 0 0 0" }}>
                Upcoming Shows &amp; Events
              </h2>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <a
                href="#book"
                style={{
                  padding: "9px 18px",
                  backgroundColor: "#d4af37",
                  color: "#0a0a0a",
                  fontWeight: 800,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  border: "1px solid #f5ecd7",
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}
              >
                <Calendar size={13} color="#0a0a0a" /> Book an Open Date
              </a>
            </div>
          </div>

          {/* SHOW EVENTS LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {UPCOMING_SHOWS.map((show) => (
              <div
                key={show.id}
                style={{
                  backgroundColor: "#121212",
                  border: "1px solid #242424",
                  borderLeft: "4px solid #d4af37",
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "20px",
                  alignItems: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
                }}
              >
                {/* DATE BADGE */}
                <div style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #333333",
                  padding: "10px 8px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "90px"
                }}>
                  <span style={{
                    color: "#d4af37",
                    fontSize: "12px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontFamily: "'Courier New', Courier, monospace, sans-serif"
                  }}>
                    {show.month}
                  </span>
                  <span style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    fontFamily: "Georgia, serif",
                    margin: "2px 0"
                  }}>
                    {show.day}
                  </span>
                  <span style={{
                    color: "#888888",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    fontFamily: "'Courier New', Courier, monospace, sans-serif"
                  }}>
                    {show.dayOfWeek}
                  </span>
                </div>

                {/* SHOW INFO */}
                <div style={{ gridColumn: "span 2" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      backgroundColor: "#1a1408",
                      border: "1px solid #d4af37",
                      color: "#d4af37",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif"
                    }}>
                      {show.format}
                    </span>
                    <span style={{
                      fontSize: "11px",
                      color: "#a8a090",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif"
                    }}>
                      <Clock size={12} color="#d4af37" /> {show.time}
                    </span>
                  </div>

                  <h3 style={{
                    margin: "0 0 4px 0",
                    color: "#ffffff",
                    fontSize: "19px",
                    fontFamily: "Georgia, serif"
                  }}>
                    {show.venue}
                  </h3>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#ede2cb",
                    fontSize: "13px",
                    marginBottom: "6px"
                  }}>
                    <MapPin size={13} color="#d4af37" />
                    <span>{show.city}</span>
                  </div>

                  <p style={{
                    margin: 0,
                    color: "#a8a090",
                    fontSize: "12px",
                    lineHeight: 1.5,
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {show.details}
                  </p>
                </div>

                {/* ACTION / STATUS */}
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end", justifyContent: "center" }}>
                  <span style={{
                    fontSize: "11px",
                    color: "#f5ecd7",
                    fontWeight: 700,
                    fontFamily: "'Courier New', Courier, monospace, sans-serif"
                  }}>
                    {show.ticketStatus}
                  </span>

                  {show.link && (
                    <a
                      href={show.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #d4af37",
                        color: "#d4af37",
                        fontSize: "11px",
                        fontWeight: 700,
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontFamily: "'Courier New', Courier, monospace, sans-serif"
                      }}
                    >
                      <span>Show Info</span> <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CALENDAR FOOTER NOTICE */}
          <div style={{
            marginTop: "20px",
            padding: "14px 18px",
            backgroundColor: "#121212",
            border: "1px solid #222222",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px"
          }}>
            <span style={{ fontSize: "12px", color: "#a8a090", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
              ✦ Gigs &amp; venues are updated regularly. Follow <strong style={{ color: "#d4af37" }}>@lukemooreguitar</strong> for set times &amp; live show announcements.
            </span>
            <a
              href="https://www.instagram.com/lukemooreguitar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#e1306c",
                fontSize: "12px",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "'Courier New', Courier, monospace, sans-serif"
              }}
            >
              <InstagramIcon size={13} color="#e1306c" /> @lukemooreguitar Announcements
            </a>
          </div>

        </div>
      </section>

      {/* 3 PERFORMANCE FORMATS */}
      <section style={{
        backgroundColor: "#0d0d0d",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "60px 20px"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "4px 0 0 0" }}>
              Performance Formats
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            
            {/* Solo */}
            <div style={{
              backgroundColor: "#121212",
              border: "1px solid #282828",
              borderTop: "3px solid #d4af37",
              padding: "26px",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.6)"
            }}>
              <div style={{ color: "#d4af37", marginBottom: "14px" }}><Guitar size={28} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#ffffff", margin: "0 0 8px 0" }}>
                Solo Acoustic
              </h3>
              <p style={{ fontSize: "13px", color: "#d5cec2", lineHeight: 1.6, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: "0 0 16px 0" }}>
                Intimate acoustic guitar and strong vocal delivery. Perfect for wedding ceremonies, cocktail hours, winery tastings, private dinner parties, and cozy listening rooms.
              </p>
              <div style={{ fontSize: "11px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                <div>• Warm acoustic storytelling</div>
                <div>• Small footprint &amp; volume control</div>
              </div>
            </div>

            {/* Duo */}
            <div style={{
              backgroundColor: "#121212",
              border: "1px solid #282828",
              borderTop: "3px solid #d4af37",
              padding: "26px",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.6)"
            }}>
              <div style={{ color: "#d4af37", marginBottom: "14px" }}><Users size={28} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#ffffff", margin: "0 0 8px 0" }}>
                Acoustic Duo
              </h3>
              <p style={{ fontSize: "13px", color: "#d5cec2", lineHeight: 1.6, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: "0 0 16px 0" }}>
                Rich two-part harmonies paired with upright/electric bass or auxiliary guitar and subtle percussion. Adds rhythmic groove while remaining conversation-friendly.
              </p>
              <div style={{ fontSize: "11px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                <div>• Rich harmonic depth</div>
                <div>• Ideal for cocktail &amp; dinner transitions</div>
              </div>
            </div>

            {/* Full Band */}
            <div style={{
              backgroundColor: "#121212",
              border: "1px solid #282828",
              borderTop: "3px solid #d4af37",
              padding: "26px",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.6)"
            }}>
              <div style={{ color: "#d4af37", marginBottom: "14px" }}><Radio size={28} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#ffffff", margin: "0 0 8px 0" }}>
                Full Americana / Rock Band
              </h3>
              <p style={{ fontSize: "13px", color: "#d5cec2", lineHeight: 1.6, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: "0 0 16px 0" }}>
                High-octane roots rock featuring lead guitar, keys, bass, and hard-hitting drums. Engineered to get festival crowds and wedding reception dance floors moving.
              </p>
              <div style={{ fontSize: "11px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                <div>• High-energy stage sets</div>
                <div>• Festival, party &amp; reception ready</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STREAMING & MUSIC PLATFORMS SECTION WITH SLIDESHOW */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "48px 20px 0 20px"
      }}>
        <div style={{
          backgroundColor: "#121212",
          border: "2px solid #b8972e",
          padding: "36px 28px",
          boxShadow: "0 6px 30px rgba(0,0,0,0.8)"
        }}>
          <div style={{ marginBottom: "28px", textAlign: "center" }}>
            <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
              Official Releases &amp; Live Sets
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "6px 0 8px 0" }}>
              Stream &amp; Listen to Luke Moore
            </h2>
            <p style={{ color: "#a8a090", fontSize: "14px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: "0 auto", maxWidth: "600px" }}>
              Listen to original singles, stream acoustic live recordings, and browse live performance tour footage across Washington State.
            </p>
          </div>

          {/* TWO-COLUMN LAYOUT: SLIDESHOW + STREAMING TILES */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "center"
          }}>
            {/* LIVE PERFORMANCE PHOTO SLIDESHOW */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <LiveMusicSlideshow />
            </div>

            {/* STREAMING & SOCIAL CARDS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* SPOTIFY CARD */}
              <div style={{
                backgroundColor: "#0a0a0a",
                border: "1px solid #1db954",
                borderTop: "3px solid #1db954",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "12px"
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <SpotifyIcon size={22} color="#1db954" />
                    <span style={{ color: "#1db954", fontWeight: 800, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                      Spotify Artist Page
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#ffffff", margin: "0 0 6px 0" }}>
                    Studio Singles &amp; Originals
                  </h3>
                  <p style={{ fontSize: "12px", color: "#d5cec2", lineHeight: 1.5, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>
                    Stream Luke Moore original tracks including <em>California Gold</em>, <em>I Want You</em>, and acoustic roots recordings.
                  </p>
                </div>

                <a
                  href="https://open.spotify.com/artist/4B7nwmbI38Z1vKMBb3ikDr?si=8k61dq-GRSC0hqPxrY7BeA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 16px",
                    backgroundColor: "#1db954",
                    color: "#0a0a0a",
                    fontWeight: 800,
                    fontSize: "11px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    border: "none",
                    fontFamily: "'Courier New', Courier, monospace, sans-serif"
                  }}
                >
                  <SpotifyIcon size={15} color="#0a0a0a" /> Stream on Spotify
                </a>
              </div>

              {/* YOUTUBE & INSTAGRAM MINI-CARDS */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #ff4d4d",
                  borderTop: "3px solid #ff4d4d",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "10px"
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                      <YouTubeIcon size={18} color="#ff0000" />
                      <span style={{ color: "#ff4d4d", fontWeight: 800, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                        YouTube
                      </span>
                    </div>
                    <p style={{ fontSize: "11px", color: "#d5cec2", lineHeight: 1.4, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>
                      Live acoustic performances &amp; concert showcases.
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/channel/UCk3q7zz31DM4u1XaWiD1pAQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#ff0000",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "10px",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif"
                    }}
                  >
                    <YouTubeIcon size={12} color="#ffffff" /> Watch
                  </a>
                </div>

                <div style={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #e1306c",
                  borderTop: "3px solid #e1306c",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "10px"
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                      <InstagramIcon size={18} color="#e1306c" />
                      <span style={{ color: "#e1306c", fontWeight: 800, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                        Instagram
                      </span>
                    </div>
                    <p style={{ fontSize: "11px", color: "#d5cec2", lineHeight: 1.4, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>
                      Behind the scenes, tour clips &amp; soundchecks.
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/lukemooreguitar"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#e1306c",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "10px",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif"
                    }}
                  >
                    <InstagramIcon size={12} color="#ffffff" /> Follow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASTER SONG LIST & REPERTOIRE SECTION */}
      <section id="songlist" style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "64px 20px"
      }}>
        <div style={{
          backgroundColor: "#121212",
          border: "2px solid #b8972e",
          padding: "36px 28px",
          boxShadow: "0 6px 30px rgba(0,0,0,0.8)"
        }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "28px" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                <Music size={14} /> Master Performance Repertoire
              </div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "4px 0 0 0" }}>
                Full Song List ({MASTER_SONG_CATALOG.length} Songs)
              </h2>
            </div>
            
            <div style={{
              fontSize: "12px",
              color: "#a8a090",
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              padding: "6px 14px",
              fontFamily: "'Courier New', Courier, monospace, sans-serif"
            }}>
              Showing <strong style={{ color: "#d4af37" }}>{filteredSongs.length}</strong> matching songs
            </div>
          </div>

          {/* SEARCH & CATEGORY FILTERS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
            {/* Search Input */}
            <div style={{ position: "relative", width: "100%" }}>
              <Search size={16} color="#d4af37" style={{ position: "absolute", left: "14px", top: "14px" }} />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search song title or artist (e.g. Jason Isbell, Beatles, Chris Stapleton, Fleetwood Mac, Petty...)"
                style={{
                  width: "100%",
                  padding: "12px 14px 12px 42px",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #2e2e2e",
                  color: "#ffffff",
                  boxSizing: "border-box",
                  fontSize: "13px",
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}
              />
            </div>

            {/* Category Tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {categories.map((cat) => {
                const isSel = selectedCategory === cat;
                const count = cat === "All" 
                  ? MASTER_SONG_CATALOG.length 
                  : MASTER_SONG_CATALOG.filter(s => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "8px 14px",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: isSel ? 800 : 600,
                      backgroundColor: isSel ? "#d4af37" : "#181818",
                      color: isSel ? "#0a0a0a" : "#ede2cb",
                      border: isSel ? "1px solid #f5ecd7" : "1px solid #2e2e2e",
                      cursor: "pointer",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif",
                      transition: "all 0.15s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <span>{cat}</span>
                    <span style={{
                      fontSize: "10px",
                      opacity: 0.85,
                      padding: "1px 5px",
                      backgroundColor: isSel ? "rgba(0,0,0,0.2)" : "#0a0a0a",
                      borderRadius: "3px"
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SONG GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "10px",
            maxHeight: "520px",
            overflowY: "auto",
            paddingRight: "6px"
          }}>
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song, idx) => (
                <div 
                  key={[song.title, song.artist, idx].join('-')} 
                  style={{
                    backgroundColor: "#0a0a0a",
                    border: "1px solid #222222",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "4px"
                  }}
                >
                  <div>
                    <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "13px", fontFamily: "Georgia, serif" }}>
                      {song.title}
                    </div>
                    <div style={{ color: "#a8a090", fontSize: "12px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                      {song.artist}
                    </div>
                  </div>
                  
                  <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "6px", marginTop: "4px" }}>
                    <span style={{
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#d4af37",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif",
                      fontWeight: 700
                    }}>
                      {song.category}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 20px", color: "#888888" }}>
                No songs match &quot;{searchTerm}&quot;. Custom requests are always welcome for booked dates!
              </div>
            )}
          </div>

          <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#181818", borderLeft: "3px solid #d4af37", fontSize: "12px", color: "#d5cec2", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
            <strong>Have a special first dance or custom song request?</strong> Luke Moore frequently arranges custom acoustic or full-band covers for weddings and corporate gatherings with advance notice.
          </div>

        </div>
      </section>

      {/* PERFORMANCE BOOKING FORM */}
      <section id="book" style={{ maxWidth: "760px", margin: "0 auto", padding: "20px 20px" }}>
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
            Check Date Availability
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "6px 0 8px 0" }}>
            Book Luke Moore for Your Event
          </h2>
          <p style={{ color: "#a8a090", fontSize: "14px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0 }}>
            Serving Bellingham, Whatcom County, Seattle, and statewide Washington.
          </p>
        </div>

        <div style={{
          backgroundColor: "#121212",
          border: "2px solid #b8972e",
          padding: "32px",
          boxShadow: "0 6px 30px rgba(0,0,0,0.8)"
        }}>
          {formSubmitted ? (
            <div style={{ textAlign: "center", padding: "28px 0" }}>
              <div style={{ color: "#d4af37", fontWeight: 700, fontSize: "18px", marginBottom: "8px", fontFamily: "Georgia, serif" }}>
                Performance Inquiry Received
              </div>
              <p style={{ color: "#f5f2eb", fontSize: "14px", margin: "0 0 8px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Thank you, <strong>{formData.name || "there"}</strong>! We received your request for <strong>{formData.format}</strong> for your <strong>{formData.eventType}</strong> in <strong>{formData.location}</strong>.
              </p>
              <p style={{ color: "#a8a090", fontSize: "13px", margin: "0 0 24px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Luke will check his calendar and reply with rates and setlist options promptly.
              </p>
              <button 
                type="button"
                onClick={handleReset}
                style={{ 
                  padding: "10px 22px", 
                  backgroundColor: "#1a1a1a", 
                  color: "#d4af37", 
                  border: "1px solid #d4af37", 
                  fontSize: "12px", 
                  fontWeight: 700, 
                  textTransform: "uppercase", 
                  letterSpacing: "1px", 
                  cursor: "pointer",
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "12px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Your Name / Organizer *</label>
                  <input 
                    id="name"
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Email *</label>
                  <input 
                    id="email"
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="you@example.com" 
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="format" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Desired Format</label>
                  <select 
                    id="format"
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="Solo Acoustic (Americana & Songwriting)">Solo Acoustic (Americana &amp; Songwriting)</option>
                    <option value="Acoustic Duo (Vocal Harmonies & Bass)">Acoustic Duo (Vocal Harmonies &amp; Bass)</option>
                    <option value="Full Americana / Rock Band">Full Americana / Rock Band</option>
                    <option value="Custom Combination / Multiple Sets">Custom Combination / Multiple Sets</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="event-type" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Event Type</label>
                  <select 
                    id="event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Brewery / Winery / Venue">Brewery / Winery / Venue</option>
                    <option value="Festival / Community Fair">Festival / Community Fair</option>
                    <option value="Corporate / Private Gathering">Corporate / Private Gathering</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="location" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Event Date &amp; City in WA</label>
                <input 
                  id="location"
                  required 
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} 
                  placeholder="e.g. October 12, Bellingham WA" 
                />
              </div>

              <div>
                <label htmlFor="special-songs" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Special Song Requests (Optional)</label>
                <input 
                  id="special-songs"
                  value={formData.specialSongs}
                  onChange={(e) => setFormData({ ...formData, specialSongs: e.target.value })}
                  style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} 
                  placeholder="e.g. First dance song, favorite Americana covers..." 
                />
              </div>

              <div>
                <label htmlFor="details" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Additional Details</label>
                <textarea 
                  id="details"
                  rows={4} 
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} 
                  placeholder="Tell us about the venue, performance duration, or sound equipment needs..."
                />
              </div>

              <button type="submit" style={{ 
                padding: "14px", 
                backgroundColor: "#d4af37", 
                color: "#0a0a0a", 
                fontWeight: 800, 
                fontSize: "13px", 
                textTransform: "uppercase", 
                letterSpacing: "1.5px", 
                border: "1px solid #f5ecd7", 
                cursor: "pointer", 
                marginTop: "6px" 
              }}>
                Submit Performance Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
