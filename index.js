


generateLocalTime = ()=>{
    const localTimeRaw = new Date()
    let localTimeStr = localTimeRaw.toLocaleString();
    let localStr = `Current local time is ${localTimeStr}`
    return localStr

}

generateVFTime = ()=>{
    const localTimeRaw = new Date()
    // Set up client side date/time so user can compare
    let localTimeStr = localTimeRaw.toLocaleString();

    // Add one minute to whatever it is to get it on VFA time
    let calc_vfa_time = localTimeRaw.getMinutes() + 1 

    // Handle the rollover at 59 minutes (this puts it to unix time)
    let vfa_time = localTimeRaw.setMinutes(calc_vfa_time)

    // Switch it back to Date obj
    let vfa_curr = new Date(vfa_time)
    let vf_time_str = vfa_curr.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})

    let vft_str = `Current Victorville Film time is ${vf_time_str}`
    return vft_str

}



moveClock = ()=>{
    littleArm = document.getElementsByClassName('little-arm');
    littleArm.style.transform = 'rotate(45deg)';
}


//console.log("In VFT it is currently " + VFATimeStr)

