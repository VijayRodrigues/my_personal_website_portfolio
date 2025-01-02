


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Analyst", "Data Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // typing text animation script
    var typed = new Typed(".typing-2", {
        strings: ["Data Analyst", "Data Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
   

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



/*
        function openModal(card) {
            // Get the modal element
            var modal = document.getElementById("myModal");
        
            // Get the modal content element
            var modalContent = modal.querySelector(".modal-content");
        
            // Get the content of the clicked card
            var cardContent = card.querySelector(".box").innerHTML;
        
            // Set the content of the modal to the content of the clicked card
            modalContent.innerHTML = cardContent;
        
            // Display the modal
            modal.style.display = "block";
        }
        
        // Close the modal when the user clicks anywhere outside of the modal
        window.onclick = function(event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
 */


var company_1 = '<div class=\'text\'> TEKsystems (Allegis Group), Bangalore <br><br><p> IT / Technical Recruiter,  ( JAN 2019 - AUG 2020 )</p> <br></div> \
                                <p> • Gathered and screened proﬁles through referrals and job boards like LinkedIn and Naukri before submitting to the Client Manager. </p> \
                                <p> • Supported clients from various domains like Banking, Automotive, Retail, E - Commerce and Healthcare and gathered market intel on the job positions.</p>';


var company_2 = '<div class=\'text\'> Proziod Analytics Pvt. Ltd., Bangalore <br><br><p> Data Analyst,  ( AUG 2020 - DEC 2021 )</p> <br></div> \
                                <p> • Implemented <b> Python automation </b> to streamline the preparation of <b> RFPs (Request for Proposals) </b>, resulting in a significant reduction of <b> 3 hours </b> in manual work.</p> \
                                <p> • Successfully implemented a streamlined process change workflow, resulting in a positive turnaround time and <b> saving approximately 2 hours </b> compared to previous methods. </p> \
                                <p> • Took on the responsibility of creating detailed monthly reports for two major customers, providing stakeholders with actionable information to guide decision-making. </p> \
                                <p> • Provided detailed weekly and quarterly customized site status reports to one of the global real estate services firms. </p> \
                                <p> • Served as a <b> key intermediary </b>  between Account Managers and Retailers, facilitating effective communication and <b> gathering essential business requirements </b> for the tender process.</p>';

var company_3_1 = '<div class=\'text\'> <p> Senior Associate - Data and BI,  ( DEC 2021 - APR 2023 )</p> <br></div> \
                                <p> • Orchestrated the seamless migration of over <b> 1.5 billion records </b> from diverse structured data sources to an on-premises Data Warehouse <b> on a biweekly basis </b>, leveraging <b> SSIS </b> for process automation. \
                                      This pivotal initiative established a robust platform for the <b> ANZ (Australia and New Zealand) Actuaries </b>, ensuring their reliance on a newly established data repository. </p> \
                                <p> • Developed and managed <b> an automated Python reconciliation process </b> between different sources, resulting in the timely generation of reports with <b> 90% efficiency </b>. \
                                      This optimization significantly enhanced data integrity and credibility by streamlining processes, ultimately <b> saving approximately 4 hours of manual work </b>. </p> \
                                <p> • Spearheaded the transition of <b> 4 data sources </b> from <b> legacy SAS scripts to R programming </b> using RODBC. \
                                      This migration substantially improved data management and accessibility, facilitating the transition of both technical and non-technical stakeholders from Global, particularly North America, towards R for future utilization. </p> \
                                <p> • Engineered a Python automation script to generate personalized Price Monitoring Report templates across various business lines, effectively <b> reducing manual tasks and saving 12 to 14 hours </b> per report generation cycle. \
                                      This resulted in a <b> yearly time-saving of approximately 168 hours </b>.</p>';


var company_3_2 = '<div class=\'text\'> Chubb Business Services Ltd., Bangalore <br><br><p> Analyst - Data and BI,  ( APR 2023 - PRESENT )</p> <br></div> \
                                <p> • Enhanced efficiency in generating reports for Actuaries Property and Casualty (P&C) tasks by converting QLIK scripts to SQL Server environment. \
                                      This initiative resulted in smoother workflows and a standardized approach to data handling, thereby improving reporting effectiveness for P&C business segments. </p> \
                                <p> • Led the <b> migration of SSIS packages </b> and <b> pipelines </b> for five sources (SQL Server ON PREM) to <b> Pyspark </b>, reducing constraints on data transfer and promoting flexibility. \
                                      This transition also decreased reliance on SSIS, a licensed platform <b> reducing by 25% of data load time </b>. </p> \
                                <p> • Developed <b> Pyspark </b> code from <b> scratch </b> for Casualty and FinLines business lines, extracting data from Azure SQL Source and employing Pyspark for data transformation, resulting in actionable insights and reports. \
                                      This enabled <b> extraction of over 15 years of historical data </b> and <b> processing of 10-20 million records </b>, eliminating manual extraction methods previously used. </p> \
                                <p> • Maintained comprehensive documentation for project changes and modules, utilizing <b> GitHub </b> and <b> JIRA </b> for version control and bug tracking. \
                                      Conducted and actively participated in <b> code reviews </b> with team members and acted as a <b> subject matter expert (SME) </b> during requirements definition stages, contributing to the implementation of Clarity. </p><br><br>';


      
var company_3 = company_3_2 + company_3_1;

function openModal(content) {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the modal content element
    var modalContent = modal.querySelector(".modal-content");

    // Set the content of the modal to the provided HTML content
    modalContent.innerHTML = content;

    // Display the modal
    modal.style.display = "block";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



