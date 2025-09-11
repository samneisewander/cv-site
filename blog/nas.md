Everyone Needs A NAS Box
Why I decided to deploy a NAS and how I did it.
Sam Neisewander
computer networking, self-hosting, docker, python 
08/18/2025
08/18/2025

## What is a NAS?

NAS stands for `network-attached storage`. A **NAS** is a server whose primary function is to archive large quantaties of data for a local network. It's pretty much a box stuffed to the gills with hard drives that can store all of your photos, movies, [Linux ISOs](https://www.urbandictionary.com/define.php?term=Linux+ISO&amp=true), files, or other digital assets.

> For you laymen out there, a **server** is *basically* a computer that runs some kind of program 24/7. For example, `Google` might have a server that runs the "Google search engine" program that you tap into every time you make a search. Many kinds of servers exist for many different purposes. A NAS is a server whose purpose is to store a metric butt-load of data.

> By the way: when I say `local network` or `network`, I'm talking about your `Wifi network`.

The idea is that if you have a NAS running on your local network, you can send files to it or retrieve files from it, which is handy for bulky archival tasks. For example, let's say I have `100GB` worth of `local drive space` on my phone. I will soon fill my phone's local drive with photos of my dog, and will no longer be able to take pictures. What am I to do?

Well, most people would just cave and buy an `iCloud` subscription. When you do this, you are essentially renting `remote drive space` on one of Apple's many `storage servers` for a monthy fee, then sending your photos there and deleting them from your phone's `local drive`, thereby freeing up that `100GB` to be used again. Apple probably has hundres of petabytes of space on their storage servers; they rent you a measly portion of this massive pool and offer your a bigger slice of the pie the more money you cough up per month.

A NAS works on essentially the same principle, except for one catch: since you own the NAS and the drives within it, **you pay for the storage space only once, and you manage your data yourself**.

## Why would I want that?

So-called "cloud storage solutions" like iCloud or OneDrive are terribly convenient and usually cheaper in both raw cost and opportunity cost than building and maintaining a NAS yourself.

But let me explain why everyone should consider a NAS.

### Ownership

Like a landlord, Apple controls your digital rent, and can raise and lower your monthly bill on their whim. At the same time, nothing is stopping them from threatening to delete the data you have entrusted to them should you fail to pay your bill. 

Since your data is stored on Apple's drives, there is also nothing stopping them (or the highest bidder, or the government) from looking at your data.

You may not feel like this is a problem. May I remind you that Apple and Microsoft are publically-traded companies whose interests are intrinsically tied to shareholder interests (i.e. making a Godforsaken amount of money) and **not the wellbeing of customers**. This means that if Apple, Google, Meta, or Microsoft can use your data to train their new AI model, or profile you for advertisers, or profile you for the government, they will if it means preserving their bottom line.

Let's say in the not-so-distant future the US government becomes an authoritarian, technocratic police state. What would you expect their first move to be? They might use LLMs and the wealth of personally-identifying data stored in various cloud services to profile the population and weed out those whose political views are antagonistic towards the regime's interests.

Don't believe that a western nation would demand that kind of access to private data? [Read this](https://www.eff.org/deeplinks/2025/02/uks-demands-apple-break-encryption-emergency-us-all).

With a NAS, you can have the convenience of having your data stored `remotely` with the comfort of knowing that the hardware is `privately owned` by you. It is a powerful tool in your digital privacy toolkit.

This also means that the price per unit storage is based on market rates for storage devices, like HDDs and SSDs, which are becoming cheaper, faster, and more spacious every year. While it is probably costlier to build a NAS than to use a cloud service initially, it might be the case that the NAS is actually cheaper a few years down the line.

### Logistics

Your personal circumstances or work might require you to manage lots and lots of digital data. Say you are a photographer, for example. You take thousands of photos at high resolutions using lossless file formats. One picture might be `100MB`. That means 10 pictures is a gig, and 1000 pictures is 100 gigs. After a few years, you'll be filling every drive you own with terabytes of data and paying exhorbitant fees for cloud storage.

Even better, let's say you're a videographer who works with a team of editors. Or a musician recording music in a studio who works with a remote mastering engineer. You'll be ingesting gigabytes of data on a daily basis, and you'll want all that data to quickly sync between several machines as you pass work between your teamates. With cloud storage, you'll be paying tons of money, but you'll also be dealing with latency issues as you transfer large amounts of data back and forth over the internet. With a NAS, you could share data between the storage server and your local devices using a wired internet connection or a high-speed Wifi connection *without having to dip your toes into the internet at all*. That means significantly faster upload and download speeds.

### Redundancy

You don't want to lose years worth of precious family photos. You don't want to lose that video project you've spend a hundred hours on. Or that senior thesis you've been writing for months. Or your large library of totally legally acquired MP3s.

This is why you've gotta be proactive about backing up your data. With a cloud service like iCloud, this is baked right in. Since Apple has a copy of literally all of your information, you don't need to think twice about it. But what happens when you run out of iCloud space and don't want to pay the extra money to get more? Well, you eventually drop your phone in the toilet and **boom!** Photos gone.

A NAS is a layer of redundancy. It can serve as a single, centralized backup location for all of your devices, whether they be phones, laptops, or PCs. You can even set up a system where your NAS backs itself up to a friends NAS, so that if your house burns down your information is still safe.

### Parenting

With a NAS, you could easily set up a `Pihole` which you can configure to prevent your kid from accessing `pr0n` or `br41nr0t` on your local network. Neat! 

### Utility

A NAS box can run several services. Here are a few running on my NAS:

- `Nextcloud`, which is basically self-hosted OneDrive. Here, I can sync files between my laptop and desktop in real time, upload videos from my iPhone to my Windows devices easily, and offload files I don't need a local copy of to save up space on my laptop while still being able to access them if I have an internet connection. This is super useful for my video editing and music production workflows.
- `Immich`, which is basically self-hosted Google Photos. It automatically backs up my iPhone's photo library to the NAS, allowing me to access my photos from my desktop. It has machine-learning features that allow me to search my library simply by describing the scene or selecting a person, and it let's me easily share photos with my girlfriend and my family through shared albums and libraries. My family is psyched to no longer have to pay for iCloud storage to back up their photos!
- `Jellyfin`, which is basically self-hosted Amazon Prime Video. It lets me stream movies and TV shows that I have saved on my NAS. I ripped the disks from my parents DVD collection and saved tons of priceless family home videos that we can now view remotely from our phones!
- `Pihole`, which blocks ads and certain categories of websites (\*cough cough pr0n\*) from my local network.
- `Portainer`, which lets me easily deploy apps that I wrote myself using Python and dockerised. This might be more interesting to programmers than laypersons.

While I haven't done this (yet), you could also self-host your own LLM, which doesn't have guardrails or content filters and won't attempt to profile you for state actors or advertisers.

## How do I build one?

If you are **NOT** your family's designated computer nerd `(DCN)`, do the following immediately:
1. Send this article to your family's `DCN`.
2. Give them `$1500` and send them pie or cake, whichever is their preference.
3. Stop reading this article and instead [go listen to this](https://open.spotify.com/album/2w3w1QYLMCQtGCWH5aLdUd?si=BZQH_SdhS-61scu1pzfWCw).


**⚠️ENTERING DESIGNATED COMPUTER NERD RESTRICTED AREA⚠️**

Hello, designated nerd! I hope you're doing well. In order to build a NAS, you will need the following:

1. A lot of `free time` to troubleshoot problems
2. Like `$1500`
3. **Either** a `solid understanding of computer networks` and self-hosting **or** an `eagerness to learn` a lot about computer networks and self-hosting.

First off, **this is not intended to be an exhaustive guide**. This is supposed to give you a high-level conceptual understanding of some of the things you will need to do to deploy a NAS in your home. I will try to point you towards resources I found helpful while working on my NAS, but the nature of documentation is that it quickly falls out of date, so you will likely have to hunt down your own up-to-date sources if you have specific questions.


**⚠️Hi there! I'm still writing this post. Please check back later for updates!⚠️**

### The machine

### TrueNAS Scale

### How the internet works (basically)

### Modem and router (I hardly know er)
#### custom DNS
#### DHCP
#### Port forwarding

### Domain

#### getting a domain
#### DNS
#### Cloudflare

### Reverse proxy

### VPN

### Applications

#### Immich
#### Jellyfin
#### Portainer