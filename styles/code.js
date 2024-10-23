async function combinedApisCall() {
    try {
        const [data1, data2] = await Promise.all([
            fetch("https://fakestoreapi.com/products").then((result) => result.json()),
            fetch("https://cohort2-project-server.onrender.com/job/all-jobs").then((result2) => result2.json()),
        ]);

        return [data1, data2]
        // console.log("fake api :", data1);
        // console.log("my api :", data2);
    } catch (error) {
        console.log('the then from trycatch', error);
        
    }
}

combinedApisCall()
  .then((result) => {
    console.log("the data results :", result);
    const newFake = result[0].slice(0, 13);
    console.log("the new fake => ", newFake);
    const jobdata = result[1].jobs
    console.log('the jobs data', jobdata);

    const jobTitle = [...newFake, ...jobdata];
    console.log(jobTitle);

    const allDetails = jobTitle.map((item) => ({
        newPersonTitle: item.title,
        price: item.price || null,
        salary: item.salary || null
    }));

    console.log('these are all the details', allDetails);
    
    
    // const allTheTitles = jobTitle.map((item) => item.title )
    // console.log(allTheTitles);

    // const allTheMoney = jobTitle.map((item) => item.price )
    // console.log(allTheMoney);
    
    
});
//     const jobdata = result.data2.jobs;
//   })
//   .catch((error) => {
//     console.log(error);
//  