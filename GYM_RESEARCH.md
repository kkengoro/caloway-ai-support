# CaloWay Coach 需要調査

- 紹介: gym.html / 回答: gym-survey.html
- 料金・機能は企画段階。販売・課金機能なし。
- 公開フォームから https://caloway-gym-research.kengo-a-1109.chatgpt.site/api/responses に送信。
- 受付基盤 Sites project: appgprj_6ae928d8486881919b1d2c2897a2e135
- 回答保存: D1 binding DB / gym_survey_responses。一般公開の読み取りAPIはありません。
- 所有者は Sites の read_database_overview → read_database_table_rows から回答を確認できます。回答一覧画面は未作成です。
- answers はJSON。interview / updates は別の連絡同意です。連絡先だけでは同意になりません。
- DM別の流入識別は gym-survey.html?source=instagram などを利用。個人情報をURLに含めないでください。
- 機能の変更時は gym-survey-schema.js と受付基盤 lib/survey-schema.mjs を揃えてください。
- 回答は受付番号で特定。削除依頼・保管期限は運営が管理します。自動削除ジョブはありません。
- 個人アプリ内のデータ連携は実装していません。
