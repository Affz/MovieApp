
// import { isNullOrUndefined } from 'util';

// export default function decodeToken() {
//     var tokenLatest = localStorage.getItem('token');

//     var decodedToken: Claims = defaultClaims();
//     if (!isNullOrUndefined(tokenLatest) && tokenLatest !== '0') {
//         var a = atob(tokenLatest);
//         decodedToken = JSON.parse((a.replace(/\'/g, '"')));
//     }
//     return decodedToken;
// }
// export function getDefaultLoginState() {
//     var tokenLatest = localStorage.getItem('token');
//     var decodedToken: Claims = defaultClaims();
//     if (!isNullOrUndefined(tokenLatest)) {
//         var a = atob(tokenLatest);
//         decodedToken = JSON.parse((a.replace(/\'/g, '"')));
//         if (decodedToken.valid > 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return false;
// }
// export function getDefaultClaims(): Claims {
//     var tokenLatest = localStorage.getItem('token');

//     var decodedToken: Claims = defaultClaims();
//     if (!isNullOrUndefined(tokenLatest) && tokenLatest !== '0') {
//         var a = atob(tokenLatest);
//         decodedToken = JSON.parse((a.replace(/\'/g, '"')));
//         return {
//           username: decodedToken.username,
//           expire_after: decodedToken.expire_after,
//           status: decodedToken.status,
//           valid: decodedToken.valid,
//           userid: decodedToken.userid,
//           access: decodedToken.access  
//         };
//     } else {
//         var defClaim = defaultClaims();
//         return defClaim;
//     }
// }