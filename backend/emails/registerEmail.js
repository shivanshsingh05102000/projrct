const registerEmail = (name, password) => (
    `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
    <tbody><tr>
      <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
<td role="module-content">
<p></p>
</td>
</tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:0px 0px 0px 0px;" bgcolor="">
<tbody><tr role="module-content">
<td height="100%" valign="top">
<table width="NaN" style="width:NaNpx;border-spacing:0;border-collapse:collapse;margin:0px undefinedpx 0px undefinedpx;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0 of-1
empty">
<tbody><tr>
<td style="padding:0px;margin:0px;border-spacing:0;">

<table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
<tbody><tr>
<td style="font-size:100px; font-family:lato; text-align: center; color: #440263; line-height:10px;padding:100px 0px 0px 0px;" valign="top" align="center">
healthyheart
</td>
</tr>
</tbody></table>

<table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
<tbody><tr>
<td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="">
</td>
</tr>
</tbody></table>

<table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-mc-module-version="2019-10-22">
<tbody><tr>
<td style="padding:50px 30px 18px 30px;line-height:36px;text-align:inherit;background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff">
<div><div style="font-family: inherit; text-align: center"><span style="font-size: 43px">Thanks for signing up, ${name}!</span></div><div></div></div>
</td>
</tr>
</tbody></table>

<table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-mc-module-version="2019-10-22">
<tbody><tr>
<td style="padding:18px 30px 18px 30px;line-height:22px;text-align:inherit;background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff">
<div><div style="font-family: inherit; text-align: center">
    <span style="font-size: 18px">
        Here is your login detail<br />
        password: <strong>${password}</strong>
    </span>
    <span style="color: #000000; font-size: 18px; font-family: arial, helvetica, sans-serif"> get access to your account now!!!</span><span style="font-size: 18px">.</span></div>
    <div style="font-family: inherit; text-align: center"><span style=" color: #440263;font-size: 18px"><strong>Thank you!</strong></span></div><div></div></div>
</td>
</tr>
</tbody></table>

<table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
<tbody><tr>
<td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="#ffffff">
</td>
</tr>
</tbody></table>
<table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 0px 0px;background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#ffbe00" class="inner-td" style="border-radius:6px;font-size:16px;text-align:center;background-color:inherit"></td></tr></tbody></table></td></tr></tbody></table>
<table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
<tbody><tr>
<td style="padding:0px 0px 50px 0px;" role="module-content" bgcolor="#ffffff">
</td>
</tr>
</tbody></table>
<table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%"><tbody><tr><td align="center" bgcolor="#6e6e6e" class="outer-td" style="padding:0px 0px 0px 0px;background-color:#6e6e6e"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#440263" class="inner-td" style="border-radius:6px;font-size:16px;text-align:center;background-color:inherit"></td></tr></tbody></table></td></tr></tbody></table>
<table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
<tbody><tr>
<td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#440263">
</td>
</tr>
</tbody></table>

</td>
</tr>
</tbody></table>

<!--[if (gte mso 9)|(IE)]>
</td>
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<tr>
</table>
</center>
<![endif]-->
`
)

module.exports = registerEmail;