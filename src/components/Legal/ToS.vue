<template>
    <Navbar :showBack="true" :showHome="true" />
    <AppContent class="p-10">
       <h1 class="text-5xl mb-5">Legal: <span style="display:initial !important;" class="text-lg-gradient">Terms of Service</span></h1>
        <p>
            This is the Terms of Service for the <a href="https://www.formrocket.me">FormRocket</a> website, owned by SweetSuite Labs.
        </p>
        <p class="mt-3">
            These terms and conditions outline the rules and regulations for the use of FormRocket's Website.
        </p>
        <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use FormRocket if you do not agree to accept all of the terms and conditions stated on this page.
        </p>
        <p class="mt-3">
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person logging on to FormRocket and accepting the Company's terms and conditions. "Type of Service" refers to the type of services you are interested in from FormRocket. "Website" refers to www.formrocket.me. "FormRocket" refers to the Company.
        </p>

        <h1 class="text-3xl mt-9 mb-3">License</h1>
        <p class="mt-3">
            Unless otherwise stated, FormRocket and/or its licensors own the intellectual property rights for all material on FormRocket. All intellectual property rights are reserved. You may access this from FormRocket for your own personal use, subject to the restrictions set in these terms and conditions.
        </p>
        <p class="mt-3">
            FormRocket can be used in personal webpages free of charge, without a license. A FormRocket business license is required for use on a commercial and/or business website. FormRocket reserves the right to take down any unlicensed commercial forms.
        </p>

        <h1 class="text-3xl mt-9 mb-3">Your Content</h1>
        <p class="mt-3">
            In these terms and conditions, "Your Content" shall mean any audio, video, text, images, photographs, files, or other material you submit to FormRocket.
        </p>
        <p class="mt-3">
            You grant FormRocket a irrevocable, non-exclusive, license to view and reproduce Your Content in any and all forms, by any means, and for any purpose.
        </p>
        <p class="mt-3">
            By using FormRocket to submit a response to an HTML form, you agree to send basic information about your client to FormRocket &amp; the form owner. This information is used for analytics and to improve the quality of the service, and is also used by the creator of the form the response is being submitted to.
        </p>

        <h1 class="text-3xl mt-9 mb-3">Restrictions</h1>
        <p class="mt-3">
            You must not:
        </p>

        <p class="mt-3">
            <strong>
                (a)
            </strong>
            Use FormRocket in any way or form that causes, or may cause, damage to the website or impairment of the availability or accessibility of FormRocket; or
        </p>

        <p class="mt-3">
            <strong>
                (b)
            </strong>
            Use FormRocket in any way or form that is unlawful, illegal, or unenforceable, or violates any applicable local, national, or international law, or any regulations, rules, or guidelines set by FormRocket; or
        </p>

        <p class="mt-3">
            <strong>
                (c)
            </strong>
            Use FormRocket in any way or form that may cause FormRocket to be unable to provide you with services, or that may damage, disable, overburden, or impair the website or FormRocket's servers or computers; or
        </p>

        <p class="mt-3">
            <strong>
                (d)
            </strong>
            Use FormRocket outside of the boundries of set limits. Abuse of any vulnerabilities or workarounds are disallowed unless specifically stated otherwise. This includes any data that may be used to violate the privacy of our Users, and / or any data that may be used to harm FormRocket in any way. FormRocket reserves the right to terminate your access to FormRocket if you breach these terms and conditions, or if FormRocket reasonably suspect that you have breached these terms and conditions, and in some cases, reserve the right to prosecute you or;
        </p>

        <p class="mt-3">
            <strong>
                (e)
            </strong>
            Use FormRocket in violation of any licenses obtained within FormRocket or;
        </p>

        <p class="mt-3">
            <strong>
                (f)
            </strong>
            Use FormRocket to submit responses to surveys or forms from an automated system, or to submit responses to surveys or forms from a robot, unless you have explicitly requested FormRocket to do so and a license was granted from FormRocket
        </p>

        <h1 class="text-3xl mt-9 mb-3">Violation</h1>
        <p class="mt-3">
            If you breach these terms and conditions in any way, FormRocket may take any action it deems appropriate including, but not limited to, the right to remove your content, terminate your account, and/or report you to law enforcement, regulators, and/or other third parties. Your Internet Protocol (IP) address is recorded to aid in enforcing these terms and conditions, and it may be blocked in case of violation.
        </p>

        <h1 class="text-3xl mt-9 mb-3">Disclaimers</h1>
        <p class="mt-3">
            FormRocket, owned by SweetSuite labs, which is run remotely, reserve the right to update these terms, with or without notice. By using this website, you agree to all listed restrictions and liabilities.
        </p>
        <p class="mt-3">
            The materials on FormRocket's website are provided on an "as is" basis. FormRocket makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p class="mt-3">
            FormRocket does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>
        <p class="mt-3">
                This website is not intended to be used as a substitute for legal advice.
        </p>
        <p class="mt-9">
            <u class="font-italic">Last updated 7/24/2022</u>
        </p>
        <br class="mt-9 mb-9" />
        <Footer /> 
    </AppContent>
</template>
<script setup>
import AppContent from '../AppContent.vue';
import Icon from "@/iconly/iconly.vue";
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>