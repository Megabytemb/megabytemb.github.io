---
layout: post
title: Hardware Model bassed Collections in SCCM 2012 R2
---

Recently at work, we decided to upgrade our SCCM installtion to SCCM 2012 R2 SP1. 
I would call our installation a medium sized install, with about 2,000 clients.

Due to an annual upgrade cycle with our hardware providor, at any one time we have 3 different laptop and desktops to support. On top of that, we have a couple of special hardware installations where people needed higher end machines.

As you could imagine, this becomes a bit of a nightmare when managing driver updates, specific software requirements and alike.

###WMI to the Rescue!!

There is a lovely class of WMI called `Win32_ComputerSystem`
To see what information is avaliable to you, run the following in Powershell

```
Get-WMIObject -query "select * from Win32_ComputerSystem"
```

A useful section of this is `model`
With our Lenovo workstations, we can use the Model section to determine what hardware we're dealing with.

###How do we get this in SCCM

Luckily, the Hardware Inventory process of SCCM collects this information, and all we have to do is create a query against it in the Database.

Here's one of the queries I used when creating our collections

```
select 
	SYS.ResourceID,
	SYS.ResourceType,
	SYS.Name,
	SYS.SMSUniqueIdentifier,
	SYS.ResourceDomainORWorkgroup,
	SYS.Client 
from SMS_R_System as Sys 
inner join 
	SMS_G_System_COMPUTER_SYSTEM as CompSys 
	on CompSys.ResourceID = Sys.ResourceId 
where CompSys.Model like "%20B7%"
```

All you'll need to do is update the Model number to suit your system.