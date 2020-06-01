import React, { Component } from 'react';
import './Information.css';
import MyTitle from '../Title';



class Home extends Component {

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (


      <div>

        <MyTitle title="מידע" />

        <div class="row justify-content-md-center">
          <div class="col-md-7 py-2">
            <div class="card text-center text-black-50  bg-light">
              <div class="card-body ">

                <p class="text muted text-right">
                  עמותת 'יש תקווה' הוקמה לפני למעלה מ-4 שנים מתוך מטרה להעניק ליווי וסיוע לחולים, אשר נאלצים להתאשפז לתקופות ארוכות או להגיע לבדיקות וטיפולים בבתי חולים באופן תדיר </p>
                <p class="text muted text-right">
                  העמותה מופעלת ע"י מעל 1000 מתנדבות ומתנדבים נאמנים, הפועלים ב-20 בתי חולים בכל רחבי הארץ, 24/7, בשבת, חג וחול.
                  אנו מלווים קרוב ל-1500 חולים מדי שבוע
                                </p>

                <p class="text muted text-right">

                  במסגרת הפרויקט המתנדבים יעניקו סיוע ותמיכה למטופלים ובני משפחתם בליווי ברחבי בית החולים, בחברה , ובמילוי מקום קרוב משפחה ליד מיטת החולה
                            </p>

                <p class="text muted text-right">
                  המתנדבות והמתנדבים בעמותה מגיעים מכלל החברה הישראלית, כאשר המכנה המשותף לכולם הוא תפיסת העולם המבוססת על ערך הנתינה, עשיית חסד ואחריות חברתית מפותחת
                            </p>

                <p class="text muted text-right">
                  (: ההתנדבות מספקת משמעותית וממכרת
                            </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default Home;

